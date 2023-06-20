package com.recipe.recipe.controllers;

import com.recipe.recipe.models.AppUser;
import com.recipe.recipe.models.Customer;
import com.recipe.recipe.repositories.AppUserJpaRepository;
import com.recipe.recipe.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RegisterAppUserController {

    @Autowired
    private AppUserJpaRepository appUserJpaRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public Customer saveCustomer(@RequestBody Customer customer){
        try{
            customer.setPwd(passwordEncoder.encode(customer.getPwd()));
            Customer customerInDB = customerRepository.save(customer);
            return customerInDB;
        }catch(Exception e){
            throw new RuntimeException("An exception occurred while saving user"+ e.getMessage());
        }
    }

    @GetMapping("/user")
    public Customer getCustomerAfterLogin(Authentication authentication){
        List<Customer> customers = customerRepository.findByEmail(authentication.getName());
        if(customers.size()>0){
            return customers.get(0);
        }else{
            return null;
        }
    }
}
