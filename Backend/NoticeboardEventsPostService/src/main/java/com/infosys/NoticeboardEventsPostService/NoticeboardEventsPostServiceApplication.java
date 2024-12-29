package com.infosys.NoticeboardEventsPostService;

import jakarta.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

import java.util.TimeZone;

@SpringBootApplication
@EnableFeignClients
public class NoticeboardEventsPostServiceApplication {
	@PostConstruct
	public void init() {
		TimeZone.setDefault(TimeZone.getTimeZone("Asia/Kolkata"));
	}
	public static void main(String[] args) {
		SpringApplication.run(NoticeboardEventsPostServiceApplication.class, args);
		System.out.println("Application is running");
	}
}
