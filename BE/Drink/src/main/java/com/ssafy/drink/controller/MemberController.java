package com.ssafy.drink.controller;

import com.ssafy.drink.domain.Member;
import com.ssafy.drink.dto.LoginMember;
import com.ssafy.drink.dto.RegistMember;
import com.ssafy.drink.dto.UpdateMember;
import com.ssafy.drink.jwt.JwtToken;
import com.ssafy.drink.service.MemberService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Api("MemberController")
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "X-AUTH-TOKEN", maxAge = 3600)
@RequestMapping("/member")
public class MemberController {

    public static final Logger logger = LoggerFactory.getLogger(MemberController.class);

    private static final String SUCCESS = "success";

    private static final String FAIL = "fail";

    @Autowired
    MemberService memberService;

    @Autowired
    JwtToken jwtToken;

    @ApiOperation(value = "id중복체크", notes = "api요청시 동일한 id가 있는지 체크 success or fail return", response = String.class)
    @PostMapping("checkid")
    public ResponseEntity<String> checkId(@RequestBody @ApiParam(value = "String으로 id body에 담아서 request",required = true) String Id ){
        //중복 id 검출
        if(!memberService.checkId(Id)){ //아이디가 중복되면
            return new ResponseEntity<String>(FAIL+":id중복입니다.", HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<>(FAIL,HttpStatus.FORBIDDEN);
    }




    @ApiOperation(value = "화원가입", notes = "회원 정보를 받아 회원가입, success of fail return // fail 이유는 fail:reason", response = String.class)
    @PostMapping
    public ResponseEntity<String> registMember(@RequestBody @ApiParam(value = "필요한 정보(id, password, birthYear, gender)",required = true) RegistMember rMember){
        logger.debug("화원가입api호출:{}", rMember);

        //중복되는 id가 없다면 회원가입진행
        if(memberService.joinMember(rMember)){
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }else{
            return new ResponseEntity<String>(FAIL+":회원가입중오류발생", HttpStatus.FORBIDDEN);
        }
    }

    @ApiOperation(value = "로그인", notes = "id와 pwd를 받아서 로그인진행 성공시 token에 JWT를 넘겨줌, message : success of fail return", response = Map.class)
    @PutMapping("login")
    public ResponseEntity<Map<String,Object>> loginMember(@RequestBody @ApiParam(value = "필요한정보(id, password)",required = true)LoginMember loginMember){
        Map<String, Object> resultMap = new HashMap<>();

        HttpStatus status;
        Member member = memberService.login(loginMember);
        try {
            if (member != null){
                resultMap.put("token", jwtToken.createToken(loginMember.getId()));
                resultMap.put("message",SUCCESS);
                status = HttpStatus.OK;
            }else{
                resultMap.put("message",FAIL);
                status = HttpStatus.FORBIDDEN;
            }
        }catch (Exception e){
            logger.error("로그인 실패 : {}", e);
            resultMap.put("message", e.getMessage());
            status = HttpStatus.FORBIDDEN;
        }
        return new ResponseEntity<>(resultMap,status);
    }

    @ApiOperation(value = "회원정보수정",notes = "필요한 정보를 받아서 회원을 찾은뒤 정보 수정(birthYear과 gender만 수정가능)",response = String.class)
    @PutMapping
    public ResponseEntity<String> updateMember(@RequestBody @ApiParam(value = "필요한정보(id, birthYear, gender)",required = true)UpdateMember updateMember){
        if(memberService.update(updateMember)){
            return new ResponseEntity<>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<>(FAIL, HttpStatus.FORBIDDEN);
    }

    @ApiOperation(value = "회원탈퇴",notes = "id받아서 회원탈퇴",response = String.class)
    @DeleteMapping
    public ResponseEntity<String> deleteMember(@RequestBody @ApiParam(value = "필요한정보(id)",required = true) String id){
        if(memberService.deleteMember(id)){
            return new ResponseEntity<>(SUCCESS, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(FAIL, HttpStatus.FORBIDDEN);
        }
    }


}
