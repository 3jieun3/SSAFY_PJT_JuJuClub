package com.ssafy.drink.repository;

import com.ssafy.drink.domain.Drink;
import com.ssafy.drink.domain.TagDrink;
import com.ssafy.drink.domain.TagDrinkKey;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TagDrinkRepository extends JpaRepository<TagDrink, TagDrinkKey> {
    List<TagDrink> findByDrink(Drink drink);
}
