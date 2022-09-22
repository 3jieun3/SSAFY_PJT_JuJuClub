package com.ssafy.drink.repository;

import com.ssafy.drink.domain.TagDrink;
import com.ssafy.drink.domain.TagDrinkKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagDrinkRepository extends JpaRepository<TagDrink, TagDrinkKey> {
}
