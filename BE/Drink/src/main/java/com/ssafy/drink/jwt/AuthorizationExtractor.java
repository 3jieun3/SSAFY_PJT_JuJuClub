package com.ssafy.drink.jwt;

import org.apache.logging.log4j.util.Strings;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;
//토큰에서 bearer을 제거하고 리턴
@Component
public class AuthorizationExtractor {

    public static final String AUTHORIZATION = "Authorization";
    public static final String ACCESS_TOKEN_TYPE = AuthorizationExtractor.class.getSimpleName() + ".ACCESS_TOKEN_TYPE";

    public String extract(HttpServletRequest request, String type){
        Enumeration<String> headers = request.getHeaders(AUTHORIZATION);
        while (headers.hasMoreElements()){
            String value = headers.nextElement();
            if (value.toLowerCase().startsWith(type.toLowerCase())){
                return value.substring(type.length()).trim();//token에서 bearer이후로 잘라냄, 공백제거
            }
        }
        return ""; // return Strings.EMPTY;와 동일
    }
}
