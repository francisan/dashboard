package com.fujifilm.HL7;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Import;

import com.fujifilm.HL7.configuration.JpaConfiguration;

@Import(JpaConfiguration.class)
@SpringBootApplication(scanBasePackages = { "com.fujifilm.HL7" })
public class SpringBootCRUDApp extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootCRUDApp.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(SpringBootCRUDApp.class);
	}

}
