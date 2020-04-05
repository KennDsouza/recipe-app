import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selRecipeDetails = new EventEmitter<Recipe>();
  recipes : Recipe [] =[ new Recipe('A Recipe Test', ' Test Summary','url'),new Recipe('A Second Test', 'Second Test Summary','url') ,new Recipe('A Third Recipe Test', 'Third Test Summary','url')  ];
  constructor() { }


  ngOnInit(): void {
  }

  onGettingSelRecDet( recipeEl : Recipe){
this.selRecipeDetails.emit(recipeEl);
  }
}
