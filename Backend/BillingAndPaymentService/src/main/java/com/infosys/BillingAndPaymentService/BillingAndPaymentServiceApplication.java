package com.infosys.BillingAndPaymentService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@EnableFeignClients
public class BillingAndPaymentServiceApplication {
	public static void main(String[] args) {
		SpringApplication.run(BillingAndPaymentServiceApplication.class, args);
		System.out.println("Application is running");
	}
}
