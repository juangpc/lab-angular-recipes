import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { ingredient } from '../interfaces/ingredient.interface';

@Component({
  selector: '[app-ingredient-item]',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.css']
})
export class IngredientItemComponent implements OnInit {

  @Input() ingredient: ingredient;
  @Output() onAddIngredient = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient(quantity: number) {
    // console.log(quantity);
    const addedIngredient: object = this.ingredient;
    addedIngredient['quantity'] = Number(quantity);
    this.onAddIngredient.emit(addedIngredient);
  }

}
