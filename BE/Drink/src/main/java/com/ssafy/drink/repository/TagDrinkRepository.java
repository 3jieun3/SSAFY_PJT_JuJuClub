package com.ssafy.drink.repository;

import com.ssafy.drink.domain.Drink;
import com.ssafy.drink.domain.Tag;
import com.ssafy.drink.domain.TagDrink;
import com.ssafy.drink.domain.TagDrinkKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TagDrinkRepository extends JpaRepository<TagDrink, TagDrinkKey> {
    List<TagDrink> findByDrink(Drink drink);

    @Query(value = "select drinkIndex from TagDrink where tagIndex = :tagIndex group by drinkIndex", nativeQuery = true)
    List<Long> findByTag(@Param("tagIndex") int tagIndex);
}
