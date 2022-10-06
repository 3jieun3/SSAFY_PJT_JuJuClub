package com.ssafy.drink.repository;

import com.ssafy.drink.domain.Drink;
import com.ssafy.drink.domain.Feed;
import com.ssafy.drink.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedRepository extends JpaRepository<Feed, Long> {
    //피드에 좋아요가 많은 순서대로 3개
    @Query(value = "select * from Feed order by likeCount desc limit 3", nativeQuery = true)
    List<Feed> selectAllLike3();

    //피드 전체조회 좋아요 많은 순으로
    @Query(value = "select * from Feed order by likeCount desc", nativeQuery = true)
    List<Feed> selectAllLikeDesc();

    //memberIndex가 동일한 피드 전체 찾기
    List<Feed> findByMember(Member member);

    //test
    List<Feed> findByDrink(Drink drink);

    List<Feed> findAllByOrderByCreatedAtDesc();
}
