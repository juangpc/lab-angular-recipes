import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { dishesService } from './services/dishes.service';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes/recipe.router';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { IngredientItemComponent } from './ingredient-item/ingredient-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    DishDetailsComponent,
    IngredientItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [dishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
