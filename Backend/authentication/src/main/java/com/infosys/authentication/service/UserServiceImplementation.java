package com.infosys.authentication.service;

import com.infosys.authentication.config.JwtProvider;
import com.infosys.authentication.dto.LoginDto;
import com.infosys.authentication.exception.LoginException;
import com.infosys.authentication.exception.SignupException;
import com.infosys.authentication.model.User;
import com.infosys.authentication.repository.UserRepository;
import com.infosys.authentication.response.AuthResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImplementation implements UserService{

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public AuthResponse signUp(User user) throws SignupException {
//        List<User> userList=userRepository.findAll();
//        for (User u:userList){
//            if (u.getRole().equals("Admin")){
//                throw new SignupException("Invalid Registration For Admin");
//            }
//        }
        User isExist=userRepository.findByEmail(user.getEmail());
        if (isExist!=null){
            throw new SignupException("User with email already exist");
        }
        User newUser=new User();
        newUser.setEmail(user.getEmail());
        if (user.getPassword().length()<7){
            throw new SignupException("Password Should Be More Than 6 Characters");
        }
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        newUser.setRole(user.getRole());
        userRepository.save(newUser);
        Authentication authentication=new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
        String token = JwtProvider.generateToken(authentication);
        return new AuthResponse(token,"SignUp Successful");
    }

    @Override
    public AuthResponse login(LoginDto loginDetails) throws LoginException {
        Authentication authentication=authenticate(loginDetails.getEmail(),loginDetails.getPassword());
        String token= JwtProvider.generateToken(authentication);
        return new AuthResponse(token,"Login Success");
    }

    @Override
    public User getUser(String jwt) {
        String email=JwtProvider.getEmailFromJwtToken(jwt);
        return userRepository.findByEmail(email);
    }

    public Authentication authenticate(String email,String password) throws LoginException {
        UserDetails userDetails=getDetails(email);
        if (userDetails==null){
            throw new LoginException("User Not Found");
        }
        if (!passwordEncoder.matches(password,userDetails.getPassword())){
            throw new LoginException("Password does not match");
        }
        return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
    }
    public UserDetails getDetails(String email) throws LoginException {
        User user=userRepository.findByEmail(email);
        if (user==null){
            throw new LoginException("User Not Found with email "+email);
        }
        List<GrantedAuthority> authorities=new ArrayList<>();
        if ("admin".equals(user.getRole())) {
            authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
        } else if ("resident".equals(user.getRole())) {
            authorities.add(new SimpleGrantedAuthority("ROLE_RESIDENT"));
        }
        return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(),authorities);
    }
}
