import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from './recipeitem/recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  Recipes: Recipe[] = [
    new Recipe('Dhal', 'Its a curry', 'assets/Daal.png' ),
    new Recipe('Pasta', 'Italian Main course', 'https://www.flickr.com/photos/30478819@N08/46789575261' )
    ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  OnRecipeSelected(recipeEl: Recipe)  {
      this.recipeWasSelected.emit(recipeEl);
  }

  constructor() { }

  ngOnInit() {
  }

}
