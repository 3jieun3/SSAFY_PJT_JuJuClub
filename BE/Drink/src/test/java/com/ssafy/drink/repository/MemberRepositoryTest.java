package com.ssafy.drink.repository;

import com.ssafy.drink.domain.Member;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@SpringBootTest
class MemberRepositoryTest {

    @Autowired
    private MemberRepository memberRepository;

    @Test
    @Transactional
    void crud(){
        Member member1 = Member.builder().id("abc").password("abc").birthYear(1996).gender('F').cratedAt(LocalDateTime.now()).build();
        memberRepository.save(member1);
        memberRepository.findAll().forEach(System.out::println);



    }
}