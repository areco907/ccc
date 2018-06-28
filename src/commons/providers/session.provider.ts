import { Injectable } from '@angular/core';

@Injectable()
export class SessionProvider {

  /**
   * @description Variable que guarda los datos de la aplicación
   *              referentes a la sesión.
   */
  public data: any = {};
}
