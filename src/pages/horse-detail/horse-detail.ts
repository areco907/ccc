import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { JsonProvider } from '../../commons/providers/json.provider';

@IonicPage()
@Component({
  selector: 'page-horse-detail',
  templateUrl: 'horse-detail.html',
})
export class HorseDetailPage {

  /**
   * @description Variable para almacenar textos correspondientes a la vista
   */
  private messages: any;

  private horseDetail: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private jsonProvider: JsonProvider) 
  {
    this.messages = this.jsonProvider.messages.horseDetail;

    this.horseDetail = this.navParams.get('horseDetail')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorseDetailPage');
  }

}
