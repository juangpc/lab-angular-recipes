import { Component, OnInit } from '@angular/core';
import { dishesService } from '../services/dishes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  dishesList: Array<object> = [];

  constructor(private dservice: dishesService) { }

  ngOnInit() {
    this.retrieveAllDishes();
  }

  retrieveAllDishes() {
    this.dservice.getAllDishes()
      .subscribe((list) => {
        console.log(list);
        this.dishesList = list;
      });
  }
}