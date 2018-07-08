import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JsonProvider } from '../../commons/providers/json.provider';
import { SessionProvider } from "../../commons/providers/session.provider";
import { LoginServiceProvider } from "../../providers/login-service/login-service";
import { UtilitiesProvider } from "../../commons/providers/utilities.provider";

@IonicPage()
@Component({
	selector: 'page-forgot-password',
	templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

	private username: any;

	/**
	   * @description Variable para almacenar textos correspondientes a la vista
	   */
	private messages: any;

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		private utilitiesProvider: UtilitiesProvider,
		private jsonProvider: JsonProvider,
		private loginServiceProvider: LoginServiceProvider,) 
	{
		this.messages = this.jsonProvider.messages.forgotPassword;
	}

	private recoverPass() {
		console.log(this.username);
		if (this.username == null || this.username == undefined || this.username == '') {
			this.utilitiesProvider.showModal(this.messages.emptyUsername)
		}else{
			if(this.validateEmail(this.username)){
				let parameters = {
					"username": this.username
				}
	
				this.loginServiceProvider.recuperar_contrasena(parameters).
				map(res => res.json())
				.subscribe((res) => { // Success 
						if (res.respuesta == 'OK') {

						}
					},
					(error) => {
						console.error(error);
					}
				)
				
			}else{
				this.utilitiesProvider.showModal(this.messages.wrongFormat)
			}
		}
	}

	private goBack() {
		this.navCtrl.pop();
	}

	private validateEmail(email) {
		let regEXp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regEXp.test(email);
	  }

}
