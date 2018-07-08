import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { JsonProvider } from '../commons/providers/json.provider';
import { SessionProvider } from "../commons/providers/session.provider";

import { LoginPage } from '../pages/login/login';
import { HomePage } from "../pages/home/home";
import { MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('content') nav;

  /**
   * @description Variable para inicializar primer vista de la aplicación
   */
  public rootPage: any;

  pages: Array<{title: string, component: any}>;

  data: any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public jsonProvider: JsonProvider,
    public sessionProvider: SessionProvider,
    public menuCtrl: MenuController
  ) 
  {
    this.initializeApp();
    // used for an example of ngFor and navigation

    this.data = this.sessionProvider.data;
    console.log(this.data);
    
    this.pages = [
      { title: 'Mis favoritos', component: '' },
      { title: 'Criaderos', component: '' },
      { title: 'Resultados ferias', component: '' }
    ];
  }

  logout(){
    this.menuCtrl.close();
    this.nav.setRoot(LoginPage);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      /**
       * Aqui la plataforma esta lista para ser usada y nuestros plugins
       * están disponibles
       */
      //this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(true);
      this.splashScreen.hide();
      this.getMessages();
    });
  }

  /**
   * @description Método para cargar mensajes y después inicializar primer 
   *              vista
   * @method getMessages
   */
  private getMessages(): void {
    this.jsonProvider.getMessages().subscribe(() => {
      this.rootPage = LoginPage;
    });
  }
}