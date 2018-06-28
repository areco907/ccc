import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { adaptersRouting } from '../../commons/constants/routing.constant';

@Injectable()
export class JsonProvider {

  /**
   * @description Variable que guarda los mensajes de la aplicación
   *              para ser usados de manera transversal
   */
  public messages: any;

  constructor(
    public http: Http
  )
  {}

  /**
   * @description Método que hace la petición para obtener los 
   *              mensajes de la aplicación
   * @method getMessages
   */
  public getMessages(): any {
    return this.http.get(adaptersRouting.json)    
    .map(res => this.extractData(res));
  }

  /**
   * @description Método que almacena los mensajes después de ser cargados.
   * @method extractData
   * @param res Respuesta
   */
  private extractData(res: Response) {
    this.messages = res.json();
  }
}
