package com.ssafy.drink.repository;

import com.ssafy.drink.domain.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food, Long> {
}
