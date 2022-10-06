package com.ssafy.drink.repository;

import com.ssafy.drink.domain.Feed;
import com.ssafy.drink.domain.LikeFeed;
import com.ssafy.drink.domain.LikeFeedKey;
import com.ssafy.drink.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LikeFeedRepository extends JpaRepository<LikeFeed, LikeFeedKey> {
    List<LikeFeed> findByMember(Member member); //member객체로 찾기

    List<LikeFeed> findByFeed(Feed feed);
}
