package com.ssafy.drink.interceptor;

import com.ssafy.drink.jwt.AuthorizationExtractor;
import com.ssafy.drink.jwt.JwtToken;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class AuthenticationInterceptor implements HandlerInterceptor {
    private JwtToken jwtToken; //토큰 유효성검사

    private AuthorizationExtractor authorizationExtractor; //토큰의 원형을 받아온다

    public AuthenticationInterceptor(AuthorizationExtractor authorizationExtractor, JwtToken jwtToken){
        this.authorizationExtractor = authorizationExtractor;
        this.jwtToken = jwtToken;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler){
        // preflight요청은 OPTIONS를 가지고있다 preflight요청이면 일단 보내고 filter에서 respose할때 다시 검사해서 필요조건을 채워주자
        if (HttpMethod.OPTIONS.matches(request.getMethod())){
            return true;
        }

        String token = authorizationExtractor.extract(request, "Bearer");
        if (!jwtToken.checkValidate(token)){
//            throw new IllegalArgumentException("유효하지 않은 토큰");
            return false;
        }
        if (StringUtils.hasLength(token)){
            String Id = jwtToken.getSubject(token);
            request.setAttribute("id",Id);
            return true;
        }else{
            return false;
        }
    }


}
