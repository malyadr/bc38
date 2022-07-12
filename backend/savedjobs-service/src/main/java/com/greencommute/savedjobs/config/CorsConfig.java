package com.greencommute.savedjobs.config;



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