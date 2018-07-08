import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { adaptersRouting } from "../../commons/constants/routing.constant";
import { Headers } from "@angular/http"

@Injectable()
export class LoginServiceProvider {

	constructor(public http: Http) { }

	public login(parameters) {
		let headers = new Headers(),
			options = new RequestOptions({ headers: headers }),
			body;

		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		body = "username=" + parameters.username + "&md5_pass=" + parameters.md5_pass + "&version=asjfh";

		return this.http.post(adaptersRouting.loginService.login, body, options);

	}

	public recuperar_contrasena(parameters) {
		let headers = new Headers(),
			options = new RequestOptions({ headers: headers }),
			body;

		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		body = "username=" + parameters.username;

		return this.http.post(adaptersRouting.loginService.recuperar_contrasena, body, options);

	}

}
