package com.infosys.authentication.controller;

import com.infosys.authentication.config.JwtProvider;
import com.infosys.authentication.dto.LoginDto;
import com.infosys.authentication.exception.LoginException;
import com.infosys.authentication.exception.SignupException;
import com.infosys.authentication.model.User;
import com.infosys.authentication.response.AuthResponse;
import com.infosys.authentication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/auth/signup")
    public AuthResponse signUp(@RequestBody User user) throws SignupException {
        return userService.signUp(user);
    }

    @PostMapping("/auth/login")
    public AuthResponse login(@RequestBody LoginDto loginDto) throws LoginException {
        return userService.login(loginDto);
    }
    @GetMapping("api/get-email")
    public String getEmailFromJWT(@RequestHeader("Authorization") String jwt){
        return JwtProvider.getEmailFromJwtToken(jwt);
    }
    @GetMapping("api/get-user")
    public User getUser(@RequestHeader ("Authorization") String jwt){
        return userService.getUser(jwt);
    }
}
