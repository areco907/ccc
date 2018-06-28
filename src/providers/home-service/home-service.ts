import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HomeServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HomeServiceProvider {

  constructor(public http: Http) {
    console.log('Hello HomeServiceProvider Provider');
  }

  getHorses() {
    return this.http.get('http://www.basculasjaramillo.com/ccc/WS/caballos/1');
  }

}
