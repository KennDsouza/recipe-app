import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
import * as _ from 'underscore';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input() ingredients : Ingredient [] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addNewItemToList(eventReef){
    this.ingredients.push(eventReef);
    console.log(this.ingredients);
  }

  deleteItemFromList(curIngre : Ingredient){
//     _.each(this.ingredients, function name(ingre : Ingredient) {
//       if(curIngre){
// debugger;
//       }
//     })
  }
}
