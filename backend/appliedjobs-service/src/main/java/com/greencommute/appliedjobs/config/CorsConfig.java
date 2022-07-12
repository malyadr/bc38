package com.greencommute.appliedjobs.config;



@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
        .allowedOrigins("*")
        .allowedHeaders("*")
        .allowedMethods("*");
    }
}