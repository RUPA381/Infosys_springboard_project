package com.infosys.authentication.service;

import com.infosys.authentication.dto.LoginDto;
import com.infosys.authentication.exception.LoginException;
import com.infosys.authentication.exception.SignupException;
import com.infosys.authentication.model.User;
import com.infosys.authentication.response.AuthResponse;

public interface UserService {
    public AuthResponse signUp(User user) throws SignupException;
    public AuthResponse login(LoginDto loginData) throws LoginException;
    public User getUser(String jwt);

}
