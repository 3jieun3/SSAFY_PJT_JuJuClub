package com.ssafy.drink.repository;

import com.ssafy.drink.domain.Drink;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DrinkRepository extends JpaRepository<Drink, Long> {
    List<Drink> findByDrinkName(String name);//술 이름으로 찾기
}
