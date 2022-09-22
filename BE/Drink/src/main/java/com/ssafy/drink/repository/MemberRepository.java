package com.ssafy.drink.repository;

import com.ssafy.drink.domain.LikeFeed;
import com.ssafy.drink.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    @Transactional
    List<Member> findById(String id);
}
