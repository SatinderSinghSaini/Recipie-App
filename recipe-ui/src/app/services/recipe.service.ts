import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  BASE_URL = 'http://localhost:8080/api/v1/recipes';
  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get<{}[]>(this.BASE_URL, {
      withCredentials: true,
    });
  }

  getRecipe(id: any) {
    return this.http.get(`${this.BASE_URL}/${id}`, { withCredentials: true });
  }

  createRecipe(recipe: any) {
    return this.http.post(this.BASE_URL, recipe, { withCredentials: true });
  }

  updateRecipe(id: any, recipe: any) {
    return this.http.put(`${this.BASE_URL}/${id}`, recipe, {
      withCredentials: true,
    });
  }

  deleteRecipe(id: any) {
    return this.http.delete(`${this.BASE_URL}/${id}`, {
      withCredentials: true,
    });
  }
}
