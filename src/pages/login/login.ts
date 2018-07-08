import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JsonProvider } from '../../commons/providers/json.provider';
import { HomePage } from "../home/home";
import { StartLoginPage } from "../start-login/start-login";

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	private homePage: any = HomePage;
	private startLoginPage: any = StartLoginPage;

	/**
	 * @description Variable para almacenar textos correspondientes a la vista
	 */
	private messages: any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private jsonProvider: JsonProvider
	) {
		this.messages = this.jsonProvider.messages.login;
	}

	private login() {
		this.navCtrl.push(this.startLoginPage);
	}

}
