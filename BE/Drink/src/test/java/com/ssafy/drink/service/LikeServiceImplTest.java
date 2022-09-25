package com.ssafy.drink.service;

import com.ssafy.drink.domain.*;
import com.ssafy.drink.repository.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;

import java.util.List;


@SpringBootTest
class LikeServiceImplTest {

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    DrinkRepository drinkRepository;

    @Autowired
    FeedRepository feedRepository;

    @Autowired
    LikeFeedRepository likeFeedRepository;

    @Autowired
    DrinkTypeRepository drinkTypeRepository;



//    @Test
//    @Transactional
//    public void test(){
//        Member member = Member.builder().id("aa").password("bb").build();
//        memberRepository.save(member);
//        memberRepository.flush();
////        List<Member> membera = memberRepository.findById("aa");
////        membera.forEach(System.out::println);
//        DrinkType drinkType = DrinkType.builder().drinkType("탁주").build();
//        drinkTypeRepository.save(drinkType);
//        drinkRepository.flush();
//        DrinkType tak = drinkTypeRepository.findById(1L).orElseThrow(RuntimeException::new);
//        Drink drink = Drink.builder().drinkName("복순도가").drinkType(tak).abv(13).ingredient("쌀").volume("13L").build();
//        drinkRepository.save(drink);
//        drinkRepository.flush();
//        Drink boksun = drinkRepository.findById(1L).orElseThrow(RuntimeException::new);
//        Member member1 = memberRepository.findById(1L).orElseThrow(RuntimeException::new);
//        Feed feed = Feed.builder().drink(boksun).title("맜있어요").content("복순도가맛있어요").member(member1).likeCount(2).build();
//        feedRepository.save(feed);
//        feedRepository.flush();
//        feedRepository.findByDrink(boksun).forEach(System.out::println);
////
////        // 멤버정보, 피드 정보가 주어진다.
////        feedRepository.findAll().forEach(System.out::println);
////
////        // 멤버 1, 피드 1
////        Member smember = memberRepository.findById(1L).orElseThrow(RuntimeException::new);
////        Feed sfeed = feedRepository.findById(1L).orElseThrow(RuntimeException::new);
////
////        LikeFeedKey likeFeedKey = LikeFeedKey.builder().memberIndex(1L).feedIndex(1L).build();
////        LikeFeed likeFeed = LikeFeed.builder().member(smember).feed(sfeed).build();
////        LikeFeed likeFeed = LikeFeed.builder().likeFeedIndex(likeFeedKey).member(smember).feed(sfeed).build();
////        System.out.println(likeFeed);
////        likeFeedRepository.save(likeFeed);
////        likeFeedRepository.flush();
//
////        likeFeedRepository.findAll().forEach(System.out::println);
//
//    }
}