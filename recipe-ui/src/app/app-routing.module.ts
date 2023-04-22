import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'recipe', component: RecipeFormComponent },
  { path: 'recipe/:id', component: RecipeFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
