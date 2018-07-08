import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { adaptersRouting } from "../../commons/constants/routing.constant";

@Injectable()
export class HomeServiceProvider {

  constructor(public http: Http) {}

  public getHorses(userId) {
    return this.http.get(adaptersRouting.homeService.caballosHome + '/' + userId);
  }

}
