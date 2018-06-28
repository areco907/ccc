import { Injectable } from '@angular/core';
import { LoadingController, ModalController, Modal} from 'ionic-angular';

import { ModalsPage } from '../../pages/modals/modals';
import { FormGroup } from '@angular/forms';
import { JsonProvider } from './json.provider';

@Injectable()
export class UtilitiesProvider {

  /**
   * @description Variable que guarda la instancia del controlador del 
   *              loading
   */
  private loading: any;

  /**
   * @description Variable que guarda la instancia del modal principal en el que se muestran 
   *              mensajes de error, alerta y éxito.
   */
  private modal: Modal;

  constructor(
    private modalController: ModalController,
    private loadingCtrl: LoadingController,
    private jsonProvider: JsonProvider) {}

  /**
   * @description Método para mostrar el loading
   * @method showLoading
   * @param customMessage [Opcional] Mensaje que sera mostrado
   */
  public showLoading(customMessage?: string): void {
    let message = customMessage? customMessage: this.jsonProvider.messages.loading;
    this.loading = this.loadingCtrl.create({
      content: message
    });
    this.loading.present();
  }

  /**
   * @description Método para ocultar el loading
   * @method hideLoading
   */
  public hideLoading(): void {
    this.loading.dismiss();
  }


  /**
   * @description Método para mostar un modal con un mensaje
   * @method showModal
   * @param data objeto con los parametros de entrada del modal. Vease: ModalsPage
   */
  public showModal(data: any): void {
    if(this.modal) {
      this.modal.dismiss();
    }
    this.modal = this.modalController.create(ModalsPage, { data: data });    
    this.modal.present();
  }


  /** 
   * @description Método que verifica el mensaje que llega de back y muestra el modal de error.
   * @method manageErrorMessage
   * @param title Título del modal que será mostrado.
   * @param message Mensaje que será mostrado.
   */
  public manageErrorMessage(title?: string, message?: string) {
    let titleError = title? title: this.jsonProvider.messages.errors.genericMainText;
    let messageError = message? message: this.jsonProvider.messages.errors.genericSecondaryText;

    let data = {
      principalText: titleError,
      secondaryText: messageError
    };
    this.showModal(data);
  }
}
