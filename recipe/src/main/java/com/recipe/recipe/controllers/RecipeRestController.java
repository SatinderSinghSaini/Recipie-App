package com.recipe.recipe.controllers;

import com.recipe.recipe.models.Recipe;
import com.recipe.recipe.repositories.RecipeJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/recipes")
public class RecipeRestController {

    @Autowired
    private RecipeJpaRepository recipeJpaRepository;
    @GetMapping(path = "")
   public List<Recipe> getRecipes(){
        return recipeJpaRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Optional<Recipe> getRecipe(@PathVariable Long id){
        return recipeJpaRepository.findById(id);
    }

    @PostMapping(path = "")
    public Recipe createRecipe(@RequestBody Recipe recipe){
        return recipeJpaRepository.save(recipe);
    }

    @PutMapping(path = "/{id}")
    public Recipe updateRecipe(@RequestBody Recipe recipe, @PathVariable Long id){
        Optional<Recipe> r = recipeJpaRepository.findById(id);
        Recipe recp = r.get();
        recp.setName(recipe.getName());
        recp.setDescription(recipe.getDescription());
        return recipeJpaRepository.save(recp);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteRecipe(@PathVariable Long id){
        recipeJpaRepository.deleteById(id);
    }
}
