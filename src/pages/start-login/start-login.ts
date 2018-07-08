import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
import { Md5 } from "md5-typescript";

import { JsonProvider } from '../../commons/providers/json.provider';
import { SessionProvider } from "../../commons/providers/session.provider";
import { LoginServiceProvider } from "../../providers/login-service/login-service";
import { HomePage } from "../home/home";
import { HomeServiceProvider } from "../../providers/home-service/home-service";
import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password";

import { UtilitiesProvider } from "../../commons/providers/utilities.provider";


@IonicPage()
@Component({
	selector: 'page-start-login',
	templateUrl: 'start-login.html',
})
export class StartLoginPage {

	private user: any;

	private password: any;

	private version: any;

	private dataHorses: any;

	/**
	 * @description Variable para almacenar textos correspondientes a la vista
	 */
	private messages: any;

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		private jsonProvider: JsonProvider,
		private sessionProvider: SessionProvider,
		private loginServiceProvider: LoginServiceProvider,
		private appVersion: AppVersion,
		private homeService: HomeServiceProvider,
		private utilitiesProvider: UtilitiesProvider) 
	{
		this.messages = this.jsonProvider.messages.startLogin;
		this.version = this.appVersion.getVersionNumber().then(res => {
			console.log(res);
		});

	}

	private goBack() {
		this.navCtrl.pop();
	}

	private goForgotPassword(){
		this.navCtrl.push(ForgotPasswordPage);
	}

	private verifyLogin() {
		if(this.user == null || this.user == undefined || this.user == ''){
			this.utilitiesProvider.showModal(this.messages.emptyUser)
		}else if(this.password == null || this.password == undefined || this.password == ''){
			this.utilitiesProvider.showModal(this.messages.emptyPass)
		}else{
			this.utilitiesProvider.showLoading(this.messages.startLogin);
			let parameters = {
				"username": this.user,
				"version": 'Android',
				"md5_pass": Md5.init(this.password)
			}

			this.loginServiceProvider.login(parameters).
			map(res => res.json())
			.subscribe((res) => { // Success 

				if (res.respuesta == 'OK') {
					this.sessionProvider.data = res.usuario;
					this.homeService.getHorses(res.usuario.id)
						.map(res => res.json())
						.subscribe((res) => {
							if(res.respuesta == 'OK'){
								console.log(res.caballos);
									this.navCtrl.setRoot(HomePage, {'body': res.caballos});

								
							}else{
								this.utilitiesProvider.hideLoading();
							}
						},
							(error) => {
								console.error(error);
							}
						)
				}else{
					this.utilitiesProvider.hideLoading();
					this.utilitiesProvider.showModal(this.messages.wrongUserPass);
				}
				console.error(res);
			},
				(error) => {
					console.error(error);
				}
			)
		}
	}

}
