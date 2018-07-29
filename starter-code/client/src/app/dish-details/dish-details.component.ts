import { Component, OnInit } from '@angular/core';
import { dishesService } from '../services/dishes.service';
import { ActivatedRoute } from '@angular/router';
import { dish } from '../interfaces/dish.interface';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})

export class DishDetailsComponent implements OnInit {

  id:string='';
  dish:dish;

  constructor(private dservice: dishesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.id = params['id']);
    this.getDishDetails(this.id);
  }

  getDishDetails(id) {
    this.dservice.getSingleDish(id)
      .subscribe((dish) => {
        console.log(dish);
        this.dish = dish;
      });
  }

}
