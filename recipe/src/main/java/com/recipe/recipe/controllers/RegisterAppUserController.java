package com.recipe.recipe.controllers;

import com.recipe.recipe.models.AppUser;
import com.recipe.recipe.repositories.AppUserJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/register")
public class RegisterAppUserController {

    @Autowired
    private AppUserJpaRepository appUserJpaRepository;
    @PostMapping
    public AppUser saveAppUser(@RequestBody AppUser appUser){
        try{
            AppUser userInDb = appUserJpaRepository.save(appUser);
        }catch(Exception e){
            throw new RuntimeException("An exception occurred while saving user"+ e.getMessage());
        }
        return appUser;
    }
}
