package com.ssafy.drink.service;

import com.ssafy.drink.domain.Feed;
import com.ssafy.drink.domain.Member;
import com.ssafy.drink.domain.Review;
import com.ssafy.drink.dto.LoginMember;
import com.ssafy.drink.dto.RegistMember;
import com.ssafy.drink.dto.UpdateMember;
import com.ssafy.drink.repository.FeedRepository;
import com.ssafy.drink.repository.MemberRepository;
import com.ssafy.drink.repository.ReviewRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MemberServiceImpl implements MemberService{
    public static final Logger logger = LoggerFactory.getLogger(MemberServiceImpl.class);

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    FeedRepository feedRepository;

    @Autowired
    ReviewRepository reviewRepository;

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
    public boolean update(UpdateMember updateMember, Long memberIndex) {
        Member member = memberRepository.findById(memberIndex).orElseThrow(RuntimeException::new);
            member.setPassword(updateMember.getPassword());
            member.setBirthYear(updateMember.getBirthYear());
            member.setGender(updateMember.getGender());
            try {
                memberRepository.save(member);
                memberRepository.flush();
            }catch (Exception e){
                return false;
            }
        return true;
    }

    @Override
    public boolean deleteMember(Long id) {
        Member member = memberRepository.findById(id).orElseThrow(RuntimeException::new);
            try {
                memberRepository.delete(member);
            }catch (Exception e) {
                return false;
            }

        return true;
    }

    @Override
    @Transactional
    public Map<String, Object> memberInfo(Long memberId) {
        Map<String,Object> map = new HashMap<>();
        Member member = memberRepository.findById(memberId).orElseThrow(RuntimeException::new);
        map.put("member",member); //member 정보 input
        List<Review> reviewList = reviewRepository.findByMember(member);
        map.put("reviews",reviewList); //member의 모든 리뷰를 리스트로 input
        List<Feed> feedList = feedRepository.findByMember(member);
        map.put("feeds",feedList); //memberId(pk)를 사용해서 모든 feed를 리스트로 input
        return map;
    }


}
