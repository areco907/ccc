import { Injectable, Renderer2 } from '@angular/core';
import { App } from 'ionic-angular';

import { adaptersRouting } from '../../commons/constants/routing.constant';
import { UtilitiesProvider } from '../../commons/providers/utilities.provider';
import { JsonProvider } from '../../commons/providers/json.provider';
import { SessionProvider } from '../../commons/providers/session.provider';
import { AdapterManagerService } from './adapter-manager-service';

import { LoginPage } from '../../pages/login/login';

declare var WL;
declare var WLAuthorizationManager;

@Injectable()
export class AuthenticationService {

  /**
   * @description Variable que crear el manejador del evento de Login.
   */
  private authHandler: any;

  /**
   * @description Variable que verifica si el usuario 
   *              ya ha realizado intento de autenticación.
   */
  private isChallenged: boolean;

  constructor(
    private adapterManagerService: AdapterManagerService,
    public utilitiesProvider: UtilitiesProvider,
    public jsonProvider: JsonProvider,
    public sessionProvider: SessionProvider,
    public parentCtlr: App
  ) 
  {
    this.isChallenged = false;
  }

  /**
   * @description Método que realiza el llamado al procedimiento para realizar autenticación 
   *              por medio de nombre de usuario y contraseña
   * @method login   
   * @param params Contiene el nombre de usuario y contraseña que se ván a validar
   */
  public login(params): Promise<any> {
    let self = this;
    this.utilitiesProvider.showLoading();
    return new Promise((resolve) => {
      if(self.isChallenged) {
        /* Maneja el evento de Login cuando el usuario ya 
        ha realizado un intento previo de autenticación */
        self.authHandler.submitChallengeAnswer(params);
      } else {
        WLAuthorizationManager.login("Login", params)
        .then(() => {
          /* Login exitoso */
          resolve(true);
        }, (error) => {
          if(error.errorCode === 'LOGIN_ALREADY_IN_PROCESS') {
            self.isChallenged = true;
          }
          this.utilitiesProvider.hideLoading();
          this.failureLogin();
        });
      }
    });
  }

  /**
   * @description Método que inicia el listener para verificar la 
   *              autenticación del usuario.
   * @method startLoginListener   
   * @param renderer Variable que permite manejar eventos del DOM.
   */
  public startLoginListener(renderer: Renderer2): void {
    let self = this;
    /* Escuchador del evento de autenticación mobile first
    para verificar la sesión del usuario durante el uso de la App */
    renderer.listen('document', 'mfpjsloaded', () => {
      self.authInit();
    });
    self.authInit();
  }

  /**
   * @description Método que crea el manejador de la segurdiad y define el
   *              callback de autenticación fallida.
   * @method authInit   
   */
  private authInit(): void {
    let self = this;
    if(!self.authHandler) {
      /* Crea el manejador de seguridad del adaptador */
      self.authHandler = WL.Client.createSecurityCheckChallengeHandler("Login");
      /* Maneja el error de autenticación 
      cuando la petición falla por algún motivo */
      self.authHandler.handleChallenge = ((response) =>  {
        self.isChallenged = true;
        self.utilitiesProvider.hideLoading();
          this.failureLogin(response);
      });  
    }
  }

  /**
   * @description Método que se ejecuta cuando el login falla.
   * @method failureLogin
   */
  private failureLogin(response?: any): void {
    let self = this;
    let title = response && response.title? response.title: self.jsonProvider.messages.loginFailedMessageTitle;
    let message = response && response.message? response.message: self.jsonProvider.messages.loginFailedMessageSubtitle;
    const modalData = {
      title: title,
      text: message,
      btnPrincipalText: self.jsonProvider.messages.loginFailedMainButtonText
    };
    this.utilitiesProvider.showModal(modalData);
  }

  /**
   * @description Método que cierra la sesión del usuario
   * @method logout
   */
  public logout(): void {
    WLAuthorizationManager.logout("Login")
    .then(() => {
      this.sessionProvider.data = {};
      this.parentCtlr.getRootNav().setRoot(LoginPage);
    }, (error) => {
      console.log(error);
    });
  }
}
