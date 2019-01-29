import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];

  private subscription: Subscription; 

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredientsObj: Ingredient[]) => {
        this.ingredients = ingredientsObj;
      },
      (error) => console.log(error)
    );
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onIngredientAdded(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }

}
