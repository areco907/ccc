import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { JsonProvider } from '../../commons/providers/json.provider';

@IonicPage()
@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html',
})
export class ModalsPage {

  /**
   * @description Variable para almacenar textos correspondientes a la vista
   */
  private messages: any;

  /**
   * @description Variable para recibir los parametros del modal.
   *              los cuales son los siguientes.
   * @property title: Titulo del modal
   * @property text: texto principal del modal
   * @property btnPrincipalText: texto del boton principal 
   * @property btnPrincipalAction: función del boton principal
   */
  private data: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl : ViewController,
    private jsonProvider: JsonProvider

  ) 
  {
    this.data = this.navParams.get('data');
    this.messages = this.jsonProvider.messages.modals;
  }

  /**
   * @description Método que se ejecuta cuando se presiona el botón principal.
   * @method buttonModalFunction
   */
  public buttonMainModalFunction(): void {
    if(this.data.btnPrincipalAction) {
      this.data.btnPrincipalAction();
    }
    this.viewCtrl.dismiss();
  }
}
