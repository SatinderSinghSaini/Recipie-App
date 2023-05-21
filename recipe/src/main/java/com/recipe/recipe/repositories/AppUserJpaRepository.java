package com.recipe.recipe.repositories;

import com.recipe.recipe.models.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppUserJpaRepository extends JpaRepository<AppUser,Long> {
    List<AppUser> getAppUserByUserName(String userName);
}
