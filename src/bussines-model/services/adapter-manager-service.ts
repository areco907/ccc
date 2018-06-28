import { Injectable } from '@angular/core';

import { SessionProvider } from '../../commons/providers/session.provider';
import { UtilitiesProvider } from '../../commons/providers/utilities.provider';

import { adaptersRouting } from '../../commons/constants/routing.constant';

declare var WLResourceRequest;
@Injectable()
export class AdapterManagerService {

  constructor(
    public utilitiesProvider: UtilitiesProvider,
    public sessionProvider: SessionProvider,
  ) {}

  /**
   * @description Método que realiza la invocación del procedimiento desde el 
   *              adaptador de Mobile First.
   * @method invokeAdapter
   * @param procedure Ruta del procedimiento que será invocado.
   * @param method Tipo de operación por el cual se realizará la petición (GET, POST).
   * @param params [Opcional] Parametros que serán pasados a la petición.
   */
  private invokeAdapter(procedure: string, method: string, params?: any): any {
    var self = this;
    return new Promise((resolve, reject) => {

      let errorCallback = (error?) => {
        self.utilitiesProvider.hideLoading();
        self.utilitiesProvider.manageErrorMessage('error');
      };

      let successCallback = (response) => {
        if(response.status === 200) {
          resolve(response.responseJSON);
        } else {
          errorCallback();
        }
      };

      let resourceRequest = new WLResourceRequest(
        "/adapters/" + procedure,
        method,
        30000
      );

      if(this.sessionProvider.data.username) {
        resourceRequest.addHeader('username', this.sessionProvider.data.username);
        resourceRequest.addHeader('idRequest', '');
        resourceRequest.addHeader('token', '');
      }
      if(method === WLResourceRequest.GET) {
        if(params){
          resourceRequest.setQueryParameters(params);
        }
        resourceRequest.send().then(successCallback, errorCallback);
      } else {
        resourceRequest.sendFormParameters(params)
        .then(successCallback, errorCallback);
      }
    });
  }

  /**
   * @description Método que define POST como el tipo de operación que será usado. 
   *              para invocar el procedimiento. 
   * @method post
   * @param procedure Ruta del procedimiento que será invocado.
   * @param params Parametros que serán pasados a la petición.
   */
  public post(procedure: string, params?: any): Promise<any> {
    return this.invokeAdapter(procedure, WLResourceRequest.POST, params);
  }

  /**
   * @description Método que define GET como el tipo de operación que será usado
   *              para invocar el procedimiento. 
   * @method get
   * @param procedure Ruta del procedimiento que será invocado.
   * @param params Parametros que serán pasados a la petición.
   */
  public get(procedure: string, params?: any): Promise<any> {
    return this.invokeAdapter(procedure, WLResourceRequest.GET, params);
  }

}
