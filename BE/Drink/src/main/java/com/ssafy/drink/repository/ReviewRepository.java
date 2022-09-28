package com.ssafy.drink.repository;

import com.ssafy.drink.domain.Drink;
import com.ssafy.drink.domain.Member;
import com.ssafy.drink.domain.Review;
import com.ssafy.drink.mapping.ResponseTodayDrink;
import com.ssafy.drink.mapping.ReviewMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByMember(Member member);

    List<ReviewMapping> findByDrink(Drink drink);

    @Query(
            value = "SELECT  drinkIndex, COUNT(*) AS count, weekday FROM Review WHERE weekday = :today  GROUP BY drinkIndex ORDER BY count DESC LIMIT 1",
            nativeQuery = true )
    List<ResponseTodayDrink> getTodayDrink(@Param("today") String today);

    @Query(
            value = "SELECT  COUNT(*) FROM Review WHERE weekday = :today",
            nativeQuery = true
    )
    Long getTodayTotalReviewCount(@Param("today") String today);

    @Query(value = "select drinkIndex from Review where age >= :startAge and age <= :endAge group by drinkIndex", nativeQuery = true)
    List<Long> findDrinkIndexByAge(@Param("startAge") int startAge,@Param("endAge") int endAge);

    @Query(value = "select drinkIndex from Review where gender = :gender group by drinkIndex",nativeQuery = true)
    List<Long> findBydrinkIndexGender(@Param("gender") char gender);


}
