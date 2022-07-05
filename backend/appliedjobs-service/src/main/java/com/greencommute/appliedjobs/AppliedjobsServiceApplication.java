package com.greencommute.appliedjobs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class AppliedjobsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppliedjobsServiceApplication.class, args);
	}

}