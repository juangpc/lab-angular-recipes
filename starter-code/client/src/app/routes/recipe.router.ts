import { Routes } from '@angular/router';
import { RecipesListComponent } from '../recipes-list/recipes-list.component';
import { DishDetailsComponent } from '../dish-details/dish-details.component';

export const routes: Routes = [
  { path: '', component: RecipesListComponent },
  { path: 'details/:id', component: DishDetailsComponent }
]