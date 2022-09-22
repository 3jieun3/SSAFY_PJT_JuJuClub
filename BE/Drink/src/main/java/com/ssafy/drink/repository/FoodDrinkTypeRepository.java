package com.ssafy.drink.repository;

import com.ssafy.drink.domain.FoodDrinkType;
import com.ssafy.drink.domain.FoodDrinkTypeKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodDrinkTypeRepository extends JpaRepository<FoodDrinkType, FoodDrinkTypeKey> {
}
