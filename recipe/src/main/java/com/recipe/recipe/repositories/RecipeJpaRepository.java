package com.recipe.recipe.repositories;

import com.recipe.recipe.models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeJpaRepository extends JpaRepository<Recipe, Long> {
}
