import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { JsonProvider } from '../../commons/providers/json.provider';
import { MenuController } from 'ionic-angular';
import { UtilitiesProvider } from "../../commons/providers/utilities.provider";

import { HomeServiceProvider } from "../../providers/home-service/home-service";

import { HorseDetailPage } from "../horse-detail/horse-detail";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private horses: any;

  activeMenu: string;

  /**
   * @description Variable para almacenar textos correspondientes a la vista
   */
  private messages: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private jsonProvider: JsonProvider,
    public menuCtrl: MenuController,
    public homeService: HomeServiceProvider,
    private utilitiesProvider: UtilitiesProvider,
    private parentCtrl: App
  )
  {
    this.messages = this.jsonProvider.messages.home;
    this.horses = this.navParams.get('body');
    this.menu1Active();
  }

  ionViewDidLoad(){
		this.utilitiesProvider.hideLoading();
	}

  menu1Active() {
    this.activeMenu = 'menu1';
    this.menuCtrl.enable(true, 'menu1');
    this.menuCtrl.enable(false, 'menu2');
  }

  private goHorseDetail(horseDetail){
    this.parentCtrl.getRootNav().push(HorseDetailPage, {'horseDetail': horseDetail})
  }

}