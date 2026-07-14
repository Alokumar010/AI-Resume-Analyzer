package com.example.resumeanalyzer.configuration;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Apply to all endpoints in the app
                .allowedOrigins("http://localhost:5173") // Allowed origins
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allowed HTTP methods
                .allowedHeaders("*") // Allowed request headers
//                .exposedHeaders("Authorization") // Headers exposed to the frontend
                .allowCredentials(true) // Include cookies or auth headers
                .maxAge(3600); // Cache preflight response for 1 hour
    }
}