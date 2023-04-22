import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  BASE_URL = 'api/v1/recipes';
  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get<{}[]>(this.BASE_URL);
  }

  getRecipe(id: any) {
    return this.http.get(`${this.BASE_URL}/${id}`);
  }

  createRecipe(recipe: any) {
    return this.http.post(this.BASE_URL, recipe);
  }

  updateRecipe(id: any, recipe: any) {
    return this.http.put(`${this.BASE_URL}/${id}`, recipe);
  }

  deleteRecipe(id: any) {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }
}
