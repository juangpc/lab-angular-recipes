import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class dishesService {

  beServer: string = environment.BASEURL;

  constructor(private http: Http) { }

  getAllDishes() {
    return this.http.get(`${this.beServer}/api/dishes`)
      .map((res) => res.json());
  }
}
