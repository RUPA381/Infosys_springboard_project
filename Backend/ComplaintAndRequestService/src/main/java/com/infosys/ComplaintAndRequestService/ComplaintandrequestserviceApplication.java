package com.infosys.complaintandrequestservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
@EnableFeignClients
public class ComplaintandrequestserviceApplication {
	public static void main(String[] args) {
		SpringApplication.run(ComplaintandrequestserviceApplication.class, args);
		System.out.println("Application is running");
	}
}
