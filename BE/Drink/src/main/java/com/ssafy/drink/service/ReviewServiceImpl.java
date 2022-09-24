package com.ssafy.drink.service;

import com.ssafy.drink.domain.Drink;
import com.ssafy.drink.domain.Member;
import com.ssafy.drink.domain.Review;
import com.ssafy.drink.dto.RegistReview;
import com.ssafy.drink.repository.DrinkRepository;
import com.ssafy.drink.repository.MemberRepository;
import com.ssafy.drink.repository.ReviewRepository;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Date;

@Service
@Slf4j
public class ReviewServiceImpl implements ReviewService{

    public static final Logger logger = LoggerFactory.getLogger(ReviewServiceImpl.class);

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    DrinkRepository drinkRepository;

    @Autowired
    MemberRepository memberRepository;


    @Override
    public boolean registReview(RegistReview registReview, Long memberIndex) {

        Drink drink = drinkRepository.findByDrinkIndex(registReview.getDrinkIndex());
        logger.info("작성한 리뷰에 해당하는 술 : {}", drink);

        Member member = memberRepository.findByMemberIndex(memberIndex);
        logger.info("리뷰를 작성한 사용자 : {} ", member);

        // 현재 요일 구하기
        String[] dayOfWeek = {"일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"};
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        int dayOfWeekNum = calendar.get(Calendar.DAY_OF_WEEK); // 1~7 : 일요일~토요일
        String today = dayOfWeek[dayOfWeekNum - 1];

        // 사용자 age = 현재년도 - 출생년도 + 1 (한국나이 기준)
        int age = LocalDate.now().getYear() - member.getBirthYear() + 1;

        Review review = Review.builder()
                .member(member)
                .drink(drink)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .weekday(today)
                .memberId(member.getId())
                .age(age)
                .gender(member.getGender())
                .score(registReview.getScore())
                .isCrawled(false)
                .review(registReview.getReview()).build();

        logger.info("작성한 리뷰 전체 정보 : {}", review);

        try {
            reviewRepository.save(review);
            reviewRepository.flush();
        } catch (Exception e) {
            return false;
        }
        return true;
    }
}
