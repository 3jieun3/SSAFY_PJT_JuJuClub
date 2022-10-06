package com.ssafy.drink.repository;

import com.ssafy.drink.domain.Drink;
import com.ssafy.drink.domain.DrinkType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DrinkRepository extends JpaRepository<Drink, Long> {
    List<Drink> findByDrinkName(String name);//술 이름으로 찾기

    List<Drink> findByDrinkType(DrinkType drinkType);

    @Query(value = "select drinkIndex from Drink where abv >= :startAbv and abv <= :endAbv")
    List<Long> findDrinkIndexByAbv(@Param("startAbv") double startAbv, @Param("endAbv") double endAbv);
}

