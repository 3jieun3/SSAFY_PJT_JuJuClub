package com.ssafy.drink.service;

import com.ssafy.drink.domain.DrinkType;
import com.ssafy.drink.domain.Food;

public interface FoodService {
    Food getFoods(DrinkType drinkType);
}
