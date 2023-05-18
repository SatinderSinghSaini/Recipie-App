package com.recipe.recipe.repositories;

import com.recipe.recipe.models.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppUserJpaRepository extends JpaRepository<AppUser,Long> {
}
