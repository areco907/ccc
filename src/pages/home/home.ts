import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JsonProvider } from '../../commons/providers/json.provider';
import { AuthenticationService } from '../../bussines-model/services/authentication.service';
import { MenuController } from 'ionic-angular';

import { HomeServiceProvider } from "../../providers/home-service/home-service";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  horses: any[] = [];

  activeMenu: string;

  /**
   * @description Variable para almacenar textos correspondientes a la vista
   */
  private messages: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private jsonProvider: JsonProvider,
    private authenticationService: AuthenticationService,
    public menuCtrl: MenuController,
    public homeService: HomeServiceProvider
  )
  {
    this.messages = this.jsonProvider.messages.home;
    this.menu1Active();
  }

  private logOut(): void{
    this.authenticationService.logout();
  }

  menu1Active() {
    this.activeMenu = 'menu1';
    this.menuCtrl.enable(true, 'menu1');
    this.menuCtrl.enable(false, 'menu2');
  }
  menu2Active() {
    this.activeMenu = 'menu2';
    this.menuCtrl.enable(false, 'menu1');
    this.menuCtrl.enable(true, 'menu2');
  }

  ionViewDidLoad(){
    this.homeService.getHorses()
    .map(res => res.json())
    .subscribe((res) => { // Success
        
        this.horses = res.caballos;
        console.error(this.horses);
      },
      (error) =>{
        console.error(error);
      }
    )
  }
}