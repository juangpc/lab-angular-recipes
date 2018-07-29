import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dishesService } from '../services/dishes.service';
import { dish } from '../interfaces/dish.interface';
import { ingredient } from '../interfaces/ingredient.interface';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})

export class DishDetailsComponent implements OnInit {

  id: string;
  dish: dish;
  ingredientsList: Array<ingredient> = [];

  constructor(private dservice: dishesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => this.id = params['id']);
    this.getDishDetails(this.id);
    this.populatePossibleIngredientsList();
  }

  getDishDetails(id) {
    this.dservice.getSingleDish(id)
      .subscribe(dish => {
        // console.log(dish);
        this.dish = dish;
      });
  }

  populatePossibleIngredientsList() {
    this.dservice.getingredientsList()
      .subscribe(ingredients => {
        this.ingredientsList = ingredients;
      })
  }

  addIngredient(newIngredient) {
    newIngredient['dishId'] = this.id;
    this.dservice.addIngredientToDish(newIngredient)
      .subscribe(err => console.log(err));
  }
}
