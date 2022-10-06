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
        System.out.println("인터셉터 등록");
        registry.addInterceptor(authenticationInterceptor)
                .excludePathPatterns("/member/signup/**")
                .excludePathPatterns("/member/checkid/**")
                .excludePathPatterns("/member/login/**")
                .addPathPatterns("/member/**")
                .addPathPatterns("/review/**")
                .addPathPatterns("/feed/valid/**");
    }
}
