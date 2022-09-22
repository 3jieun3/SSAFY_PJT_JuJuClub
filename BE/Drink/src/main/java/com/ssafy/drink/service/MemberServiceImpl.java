package com.ssafy.drink.service;

import com.ssafy.drink.domain.Member;
import com.ssafy.drink.dto.LoginMember;
import com.ssafy.drink.dto.RegistMember;
import com.ssafy.drink.dto.UpdateMember;
import com.ssafy.drink.repository.MemberRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class MemberServiceImpl implements MemberService{
    public static final Logger logger = LoggerFactory.getLogger(MemberServiceImpl.class);

    @Autowired
    MemberRepository memberRepository;

    //중복 id 검출
    @Override
    public boolean checkId(String id) {
        if(memberRepository.findById(id).isEmpty()){ //중복되는 id가 없으면 true return
            return true;
        }else {
            return false;
        }
    }


    @Override
    public boolean joinMember(RegistMember registMember){
        try {
            memberRepository.save(registMember.toEntity());
            memberRepository.flush();
        }catch (Exception e){
            logger.error("회원가입 에러 : {}",e);
            return false;
        }
        return true;
    }

    @Override
    public Member login(LoginMember loginMember) {
        List<Member> memberList = memberRepository.findById(loginMember.getId());
        for (Member member : memberList) {
            if (member.getPassword().equals(loginMember.getPassword())){
                return member;
            }
        }
        return null;
    }

    @Override
    public boolean update(UpdateMember updateMember) {
        List<Member> memberList = memberRepository.findById(updateMember.getId());
        for(Member member : memberList){
            member.setBirthYear(updateMember.getBirthYear());
            member.setGender(updateMember.getGender());
            try {
                memberRepository.save(member);
                memberRepository.flush();
//                break;
            }catch (Exception e){
                return false;
            }

        }
        return true;
    }

    @Override
    public boolean deleteMember(String id) {
        List<Member> memberList = memberRepository.findById(id);
        for(Member member : memberList){
            try {
                memberRepository.delete(member);
            }catch (Exception e) {
                return false;
            }
        }
        return true;
    }


}
