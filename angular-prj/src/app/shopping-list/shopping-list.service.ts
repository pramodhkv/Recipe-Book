import { Ingredient } from "../shared/ingredient.model";
import { Subject, Subscription } from "rxjs";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Ladies Finger', 10),
        new Ingredient('Onions', 1),
        new Ingredient('Tomatoes', 1)
    ];

    ingredientsChanged = new Subject<Ingredient[]>();

    startedEditing = new Subject<number>();

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients);
    }

    addIngredients(ingredients: Ingredient[]) {
        console.log('over here');
        console.log(ingredients);
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number, selectedIngredient: Ingredient) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}