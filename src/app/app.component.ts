import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { JsonProvider } from '../commons/providers/json.provider';

import { LoginPage } from '../pages/login/login';
import { HomePage } from "../pages/home/home";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  /**
   * @description Variable para inicializar primer vista de la aplicación
   */
  public rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public jsonProvider: JsonProvider,
  ) 
  {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Mis favoritos', component: '' },
      { title: 'Criaderos', component: '' },
      { title: 'Resultados ferias', component: '' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      /**
       * Aqui la plataforma esta lista para ser usada y nuestros plugins
       * están disponibles
       */
      this.statusBar.styleDefault();
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
      this.rootPage = HomePage;
    });
  }
}