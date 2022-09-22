package com.ssafy.drink.config;

import com.ssafy.drink.interceptor.AuthenticationInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {


    public final AuthenticationInterceptor authenticationInterceptor;

    public WebConfig(AuthenticationInterceptor authenticationInterceptor){
        this.authenticationInterceptor=authenticationInterceptor;
    }

    public void addInterceptors(InterceptorRegistry registry){
        registry.addInterceptor(authenticationInterceptor)
                .excludePathPatterns("/api/member/signup/**")
                .excludePathPatterns("/api/member/checkid/**")
                .excludePathPatterns("/api/member/login/**")
                .excludePathPatterns("/api/feed/write")
                .addPathPatterns("/api/member/**")
                .addPathPatterns("/api/review/**")
                .addPathPatterns("/api/info/*")
                .addPathPatterns("/api/feed/**");
    }
}
