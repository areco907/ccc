import { Component, Renderer2 } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthenticationService } from '../../bussines-model/services/authentication.service';
import { JsonProvider } from '../../commons/providers/json.provider';
import { UtilitiesProvider } from '../../commons/providers/utilities.provider';
import { SessionProvider } from '../../commons/providers/session.provider';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  /**
   * @description Variable para almacenar textos correspondientes a la vista
   */
  private messages: any;

  /**
   * @description Variable para almacenar datos del modelo
   */
  private data: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public renderer: Renderer2,
    private jsonProvider: JsonProvider,
    private authenticationService: AuthenticationService,
    private utilitiesProvider: UtilitiesProvider,
    private sessionProvider: SessionProvider
  )
  {
    //this.authenticationService.startLoginListener(this.renderer);
    this.messages = this.jsonProvider.messages.login;
    this.data = {};
  }


  /**
   * @description Método que realiza el llamado al servicio para 
   *              validar un nombre de usuario.
   * @method login
   */
  public login(formGroup): void {
    let self = this;
    self.authenticationService.login({
      username: self.data.username,
      password: self.data.password
    }).then((response) => {
      let self = this;
      self.utilitiesProvider.hideLoading();
      if(response === true) {
        self.sessionProvider.data = self.data;
        self.navCtrl.setRoot(HomePage);
      }
    });
  }

  /**
   * @description Método que muestra un modal
   * @method showModalExample
   */
  public showModalExample() {
    this.utilitiesProvider.showModal({
      title: 'Título personalizado',
      text: 'Texto que se quiere mostrar en el modal',
      btnPrincipalText: 'Continuar',
      btnPrincipalAction: () => {
        alert('Accción personalizada, ejecuta la función y luego cierra el modal, tener en cuenta que la función pasada debe ser función flecha');
      }
    });
  }
}
