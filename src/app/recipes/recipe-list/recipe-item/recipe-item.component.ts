import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() recipeDetails = new EventEmitter<void>();

  @Input() recipe : Recipe ;

  constructor() { }

  ngOnInit(): void {
  }

  sendRecipeToRecipeDetails(){
    this.recipeDetails.emit();
  }
}
