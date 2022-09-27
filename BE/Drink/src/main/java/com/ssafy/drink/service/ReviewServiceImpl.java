package com.ssafy.drink.service;

import com.ssafy.drink.domain.Drink;
import com.ssafy.drink.domain.Member;
import com.ssafy.drink.domain.Review;
import com.ssafy.drink.dto.RegistReview;
import com.ssafy.drink.dto.UpdateReview;
import com.ssafy.drink.mapping.ResponseTodayDrink;
import com.ssafy.drink.repository.DrinkRepository;
import com.ssafy.drink.repository.MemberRepository;
import com.ssafy.drink.repository.ReviewRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

@Service
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

        Drink drink = drinkRepository.findById(registReview.getDrinkIndex()).orElseThrow(RuntimeException::new);
        logger.info("작성한 리뷰에 해당하는 술 : {}", drink);

        Member member = memberRepository.findById(memberIndex).orElseThrow(RuntimeException::new);
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

    @Override
    public boolean updateReview(UpdateReview updateReview) {
        Review review = reviewRepository.findById(updateReview.getReviewIndex()).orElseThrow(RuntimeException::new);
        // 리뷰 내용, 평점, 업데이트 시간 수정
        review.setReview(updateReview.getReview());
        review.setScore(updateReview.getScore());
        review.setUpdatedAt(LocalDateTime.now());

        try {
            reviewRepository.save(review);
            reviewRepository.flush();
        } catch(Exception e) {
            return false;
        }

        return true;
    }

    @Override
    public boolean deleteReview(Long reviewIndex) {

        Review review = reviewRepository.findById(reviewIndex).orElseThrow(RuntimeException::new);
        try {
            reviewRepository.delete(review);
        } catch(Exception e) {
            return false;
        }
        return true;
    }

    @Override
    public Map<String, Object> todayDrink() {

        // 현재 요일 구하기
        String[] dayOfWeek = {"일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"};
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        int dayOfWeekNum = calendar.get(Calendar.DAY_OF_WEEK); // 1~7 : 일요일~토요일
        String today = dayOfWeek[dayOfWeekNum - 1];

        List<ResponseTodayDrink> responseTodayDrink = reviewRepository.getTodayDrink(today); // 현재 요일에 가장 많이 먹은 술 정보(drinkIndex, count, weekday)
        Long todayTotalReviewCount = reviewRepository.getTodayTotalReviewCount(today); // 현재 요일에 작성된 글 전체 개수

        Drink drink = drinkRepository.findById(responseTodayDrink.get(0).getDrinkIndex()).orElseThrow(RuntimeException::new);

        Map<String, Object> map = new HashMap<>();
        map.put("drink", drink);
        map.put("weekday", responseTodayDrink.get(0).getWeekday());
        int percent = (int) ((double)responseTodayDrink.get(0).getCount() / (double)todayTotalReviewCount * 100);
        map.put("percent", percent);

        return map;
    }

}
