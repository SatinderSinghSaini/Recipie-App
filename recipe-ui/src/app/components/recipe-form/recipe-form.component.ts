import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit {
  public recipe: any;

  constructor(
    private router: Router,
    private recipeSvc: RecipeService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.recipeSvc
        .getRecipe(id)
        .subscribe((recipe: any) => (this.recipe = recipe));
    } else {
      this.recipe = { id: null, name: '', description: '' };
    }
  }

  public onSubmit() {
    if (this.recipe.id) {
      this.recipeSvc
        .updateRecipe(this.recipe.id, this.recipe)
        .subscribe((r) => this.router.navigate(['/']));
    } else {
      this.recipeSvc.createRecipe(this.recipe).subscribe(
        (r) => this.router.navigate(['/']),
        (err) => console.log
      );
    }
  }
}
