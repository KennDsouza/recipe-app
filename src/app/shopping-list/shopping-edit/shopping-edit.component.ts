import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.modal';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
@ViewChild('ingredientInput') ingredientRef : ElementRef;
@ViewChild('amountInput') amountRef : ElementRef;

@Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }


  addNewItemToList(){
    const ing = this.ingredientRef.nativeElement.value;
    const amt = this.amountRef.nativeElement.value;
    const newItem = new Ingredient(ing, amt);
    this.newIngredient.emit(newItem);
    this.ingredientRef.nativeElement.value = '';
    this.amountRef.nativeElement.value ='';
  }

  clearInputFields(){
    this.ingredientRef.nativeElement.value = '';
    this.amountRef.nativeElement.value ='';
  }

}
