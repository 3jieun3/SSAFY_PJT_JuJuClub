package com.ssafy.drink.service;

import com.ssafy.drink.domain.Member;
import com.ssafy.drink.dto.LoginMember;
import com.ssafy.drink.dto.RegistMember;
import com.ssafy.drink.dto.UpdateMember;
import org.springframework.stereotype.Service;

import java.util.Map;


public interface MemberService {
    boolean checkId(String id);
    boolean joinMember(RegistMember registMember);
    Member login(LoginMember loginMember);
    boolean update(UpdateMember updateMember);
    boolean deleteMember(Long id);
    Map<String,Object> memberInfo(Long id);
}
