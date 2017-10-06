package com.fujifilm.HL7.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import static springfox.documentation.builders.PathSelectors.regex;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	
	@Bean
	public Docket graphApi(){
		return new Docket(DocumentationType.SWAGGER_2).apiInfo(metaData()).groupName("CLIENT API")
				.select().apis(RequestHandlerSelectors.basePackage("com.fujifilm.HL7.controller")).paths(regex("/drawGraph.*")).build();
	}
	
	@Bean
	public Docket appApi() {
	    return new Docket(DocumentationType.SWAGGER_2).apiInfo(metaData()).groupName("APPLICATION MANAGEMENT API")
	            .select()
	            .apis(RequestHandlerSelectors.any())
	            .paths(PathSelectors.any())
	            .build();

	}

	private ApiInfo metaData() {
        ApiInfo apiInfo = new ApiInfo(
                "Fuji REST API",
                "Fuji REST API for hospital dashboard",
                "1.0",
                "Terms of service",
                new Contact("Nest Dev Team", "http://sfotechnologies.net/", "Prajeesh.T@nestgroup.net"),
               "Apache License Version 2.0",
                "https://www.apache.org/licenses/LICENSE-2.0");
        return apiInfo;
    }
}
