package com.ssafy.drink.controller;

import ch.qos.logback.core.net.SyslogOutputStream;
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

import javax.servlet.http.HttpServletRequest;
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
    @PostMapping("/checkid/{id}")
    public ResponseEntity<String> checkId(@PathVariable @ApiParam(value = "String으로 id body에 담아서 request",required = true) String id ){
        //중복 id 검출
        if(!memberService.checkId(id)){ //아이디가 중복되면
            return new ResponseEntity<String>("중복검사"+FAIL, HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<>(SUCCESS,HttpStatus.OK);
    }




    @ApiOperation(value = "화원가입", notes = "회원 정보를 받아 회원가입, success of fail return // fail 이유는 fail:reason", response = String.class)
    @PostMapping("/signup")
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
    @PostMapping("login")
    public ResponseEntity<Map<String,Object>> loginMember(@RequestBody @ApiParam(value = "필요한정보(id, password)",required = true)LoginMember loginMember){
        Map<String, Object> resultMap = new HashMap<>();

        HttpStatus status;
        Member member = memberService.login(loginMember);

        try {
            if (member != null){
                resultMap.put("token", jwtToken.createToken(member.getMemberIndex()));
                resultMap.put("message",SUCCESS);
                status = HttpStatus.OK;
            }else{
                resultMap.put("message",FAIL+"비밀번호가 틀렸습니다.");
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
    public ResponseEntity<String> updateMember(HttpServletRequest request , @RequestBody @ApiParam(value = "필요한정보(id, birthYear, gender)",required = true)UpdateMember updateMember){
       Long memberIndex = Long.parseLong(String.valueOf(request.getAttribute("memberIndex")));
        if(memberService.update(updateMember, memberIndex)){
            return new ResponseEntity<>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<>(FAIL, HttpStatus.FORBIDDEN);
    }

    @ApiOperation(value = "회원탈퇴",notes = "필요한 정보 없음",response = String.class)
    @DeleteMapping
    public ResponseEntity<String> deleteMember(HttpServletRequest request){
        Long id = (Long) request.getAttribute("memberIndex");
        if(memberService.deleteMember(id)){
            return new ResponseEntity<>(SUCCESS, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(FAIL, HttpStatus.FORBIDDEN);
        }
    }

    @ApiOperation(value = "내 정보, 내 피드, 내 후기 가져오기",notes = "필요한 정보 없음",response = Map.class)
    @GetMapping
    public ResponseEntity<Map<String,Object>> memberInfo(HttpServletRequest request){
        Map<String,Object> map = new HashMap<>();
        Long memberId = Long.parseLong(String.valueOf(request.getAttribute("memberIndex")));
        //test JWT 에서 뽑아온 memberIndex
        System.out.println(memberId);
        map = memberService.memberInfo(memberId);
        return new ResponseEntity<>(map,HttpStatus.OK);
    }


    @ApiOperation(value = "비밀번호 일치 확인", notes = "DB 내 회원의 비밀번호와 입력한 비밀번호의 일치 여부를 확인한다", response = String.class)
    @PostMapping("/checkpw")
    public ResponseEntity<String> pwCheck(@RequestBody @ApiParam(value = "필요한 정보(password)", required = true) Map<String, String> password, HttpServletRequest request) {

        Long memberIndex = (Long) request.getAttribute("memberIndex");
        Member member = memberService.getMember(memberIndex);

        if(password.get("password") != null && member.getPassword().equals(password.get("password"))) {
            return new ResponseEntity<>("match", HttpStatus.OK);
        }
        return new ResponseEntity<>("mismatch", HttpStatus.FORBIDDEN);
    }

    @ApiOperation(value = "비밀번호 수정", notes = "회원의 비밀번호를 수정한다.", response = String.class)
    @PutMapping("/pw")
    public ResponseEntity<String> updatePassword(@RequestBody @ApiParam(value = "필요한 정보(password)", required = true) Map<String, String> password, HttpServletRequest request) {

        Long memberIndex = (Long) request.getAttribute("memberIndex");
        if(memberService.updatePassword(memberIndex, password.get("password"))) {
            return new ResponseEntity<>(SUCCESS, HttpStatus.OK);
        }

        return new ResponseEntity<>(FAIL, HttpStatus.FORBIDDEN);
    }

}
