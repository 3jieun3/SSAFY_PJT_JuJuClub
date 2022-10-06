package com.ssafy.drink.interceptor;

import com.ssafy.drink.jwt.AuthorizationExtractor;
import com.ssafy.drink.jwt.JwtToken;
import jdk.nashorn.internal.parser.JSONParser;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Enumeration;

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
        System.out.println("인터셉터 시작");
        // preflight요청은 OPTIONS를 가지고있다 preflight요청이면 일단 보내고 filter에서 respose할때 다시 검사해서 필요조건을 채워주자
        if (HttpMethod.OPTIONS.matches(request.getMethod())){
            return true;
        }


        System.out.println("request header확인용");
//        try {
//            String line = "";
//            StringBuilder stringBuilder = new StringBuilder();
//            InputStream inputStream = request.getInputStream();
//            BufferedReader br = new BufferedReader(new InputStreamReader(inputStream));
//            while ((line = br.readLine()) != null){
//                stringBuilder.append(line);
//            }
//            String bodyJson = "";
//            bodyJson = stringBuilder.toString();
//            System.out.println(bodyJson);
//        }catch (Exception e){
//            e.printStackTrace();
//        }



        Enumeration eHeader = request.getHeaderNames();
        while (eHeader.hasMoreElements()){
            String req_Name = (String)eHeader.nextElement();
            String req_Val = request.getHeader(req_Name);
            System.out.println("reqName : "+req_Name+"  |  reqVal : "+req_Val);
        }


        String token = authorizationExtractor.extract(request, "Bearer");

        if (StringUtils.hasLength(token)){
            System.out.println("성공");
        }
        if (!jwtToken.checkValidate(token)){
            throw new IllegalArgumentException("유효하지 않은 토큰");
//            return false;
        }
        Long memberIndex = Long.parseLong(jwtToken.getSubject(token));
        System.out.println(memberIndex);
        request.setAttribute("memberIndex",memberIndex);
        return true;
    }


}
