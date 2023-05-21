package com.recipe.recipe.config;

import com.recipe.recipe.models.AppUser;
import com.recipe.recipe.repositories.AppUserJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {
    @Autowired
    AppUserJpaRepository appUserJpaRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String userName = authentication.getName();
        String pwd = authentication.getCredentials().toString();

        List<AppUser> appUsers = appUserJpaRepository.getAppUserByUserName(userName);
        if(appUsers.size() >0){
            AppUser appUser = appUsers.get(0);
            String userPwd = appUser.getPassword();
            if(passwordEncoder.matches(pwd,userPwd)){
                return new UsernamePasswordAuthenticationToken(userName,pwd,null);
            }else{
                throw new BadCredentialsException("Password doesn't matched");
            }
        }else {
            throw new BadCredentialsException("User does not exist.");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
    }
}
