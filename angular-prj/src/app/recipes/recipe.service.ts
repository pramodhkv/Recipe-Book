import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Bhindi fry recipe', 
        'This is a Bhindy fry recipe', 
        'https://myheartbeets.com/wp-content/uploads/2013/12/indian-okra-recipe-bhindi.jpg',
        [new Ingredient('spinach', 1),
        new Ingredient('Chillies', 3)]),
        new Recipe('Another Bhindi fry recipe', 
        'This is another Bhindy fry recipe', 'https://myheartbeets.com/wp-content/uploads/2013/12/indian-okra-recipe-bhindi.jpg',
        [new Ingredient('spinach', 2),
        new Ingredient('Chillies', 2)])
    ];

    recipesChanged = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes);
    }

    getRecipeById(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}