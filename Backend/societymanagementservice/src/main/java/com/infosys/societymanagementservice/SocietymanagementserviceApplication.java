package com.infosys.societymanagementservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class SocietymanagementserviceApplication {
	public static void main(String[] args) {
		SpringApplication.run(SocietymanagementserviceApplication.class, args);
		System.out.println("Application is running");
	}
}
