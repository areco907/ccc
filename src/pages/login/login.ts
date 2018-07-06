import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JsonProvider } from '../../commons/providers/json.provider';
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private homePage: any = HomePage;

  /**
   * @description Variable para almacenar textos correspondientes a la vista
   */
  private messages: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private jsonProvider: JsonProvider
  )
  {
    this.messages = this.jsonProvider.messages.login;
  }

  private login(){
    this.navCtrl.setRoot(this.homePage);
  }

}
