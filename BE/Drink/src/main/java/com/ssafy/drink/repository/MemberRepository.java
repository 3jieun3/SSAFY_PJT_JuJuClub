package com.ssafy.drink.repository;

import com.ssafy.drink.domain.LikeFeed;
import com.ssafy.drink.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    List<Member> findById(String id);
}
