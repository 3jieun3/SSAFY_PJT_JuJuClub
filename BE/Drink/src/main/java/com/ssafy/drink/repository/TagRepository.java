package com.ssafy.drink.repository;

import com.ssafy.drink.domain.Tag;
import com.ssafy.drink.domain.TagDrink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {

}
