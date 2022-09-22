package com.ssafy.drink.repository;

import com.ssafy.drink.domain.Feed;
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
}
