package com.ssafy.drink.repository;

import com.ssafy.drink.domain.Member;
import com.ssafy.drink.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByMember(Member member);
}
