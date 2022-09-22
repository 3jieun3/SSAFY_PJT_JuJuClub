package com.ssafy.drink.repository;

import com.ssafy.drink.domain.Drink;
import com.ssafy.drink.domain.DrinkType;
import com.ssafy.drink.domain.Feed;
import com.ssafy.drink.domain.Member;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class FeedRepositoryTest {


    @Autowired
    DrinkRepository drinkRepository;

    @Autowired
    DrinkTypeRepository drinkTypeRepository;

    @Autowired
    FeedRepository feedRepository;



    @Test
    void test(){
        DrinkType drinkType = DrinkType.builder().drinkType("탁주").build();
        drinkTypeRepository.save(drinkType);
        drinkRepository.flush();

        DrinkType tak = drinkTypeRepository.findById(1L).orElseThrow(RuntimeException::new);

        Drink drink = Drink.builder().drinkName("복순도가").drinkType(tak).abv(13).ingredient("쌀").volume("13L").build();
        drinkRepository.save(drink);
        drinkRepository.flush();

        Feed feed = Feed.builder().drink(drink).likeCount(5).build();
        feedRepository.save(feed);
        feed = Feed.builder().drink(drink).likeCount(15).build();
        feedRepository.save(feed);
        feed = Feed.builder().drink(drink).likeCount(25).build();
        feedRepository.save(feed);
        feed = Feed.builder().drink(drink).likeCount(3).build();
        feedRepository.save(feed);
        feed = Feed.builder().drink(drink).likeCount(7).build();
        feedRepository.save(feed);

        feedRepository.flush();
        feedRepository.selectAllLike3().forEach(System.out::println);
//        feedRepository.findAll().forEach(System.out::println);


    }
}