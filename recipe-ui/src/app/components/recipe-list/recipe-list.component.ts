import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  public recipies: any[] = [];
  public selectedRecipe: any;

  constructor(private recipeSvc: RecipeService) {}
  ngOnInit() {
    this.getRecipes();
  }

  private getRecipes() {
    this.recipeSvc
      .getRecipes()
      .subscribe((recipes) => (this.recipies = recipes));
  }

  onSelect(recipe: any): void {
    this.selectedRecipe = recipe;
  }
  onDelete(id: any) {
    this.recipeSvc.deleteRecipe(id).subscribe(() => {
      this.getRecipes();
    });
    this.recipies = this.recipies.filter((recipe) => recipe.id !== id);
  }
}
