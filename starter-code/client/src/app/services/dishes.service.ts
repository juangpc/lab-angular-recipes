import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';


@Injectable()
export class dishesService {

  beServer: string = environment.BASEURL;
  dishId: string;

  constructor(private http: Http) { }

  errorHandler(e) {
    console.log('dishesServiceError')
    console.log(e.message);
    console.log(e);
    return e;
  }

  getAllDishes() {
    return this.http.get(`${this.beServer}/api/dishes`)
      .map((res) => res.json());
  }

  getSingleDish(id: string) {
    return this.http.get(`${this.beServer}/api/dishes/${id}`)
      .map((res) => res.json());
  }

  getingredientsList() {
    return this.http.get(`${this.beServer}/api/ingredients`)
      .map((res) => res.json());
  }

  addIngredientToDish(ingredient) {
    const quantity = ingredient.quantity;
    const queryURL = `${this.beServer}/api/dishes/${ingredient.dishId}/ingredients/${ingredient._id}/add`;
    console.log(ingredient);
    console.log(queryURL);
    return this.http.post(queryURL, { quantity })
      .pipe(map((res: Response) => { return res.json(); }),
      )
  }

}
