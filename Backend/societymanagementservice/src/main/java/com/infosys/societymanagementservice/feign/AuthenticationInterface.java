package com.infosys.societymanagementservice.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name="authentication")
@Component
public interface AuthenticationInterface {
    @GetMapping("/api/get-email")
    public String getEmailFromJWT(@RequestHeader("Authorization") String jwt);

}