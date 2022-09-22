package com.ssafy.drink.domain;

import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

class MemberTest {

    @Test
    void test(){
        Member member1 = Member.builder().id("abc").password("abc").birthYear(1996).gender('F').cratedAt(LocalDateTime.now()).build();
        System.out.println(member1);
    }
}