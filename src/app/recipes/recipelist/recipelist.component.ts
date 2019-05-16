import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from './recipeitem/recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  Recipes: Recipe[] = [
    new Recipe('Dhal', 'Its a curry', 'http://4.bp.blogspot.com/-29Vtz6KgPU0/U-CkMW1dxUI/AAAAAAAAJvg/7D90y8mSA1I/s1600/dal.jpg' )
    ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  OnRecipeSelected(recipeEl: Recipe)  {
      this.recipeWasSelected.emit(recipeEl);
  }

  constructor() { }

  ngOnInit() {
  }

}
