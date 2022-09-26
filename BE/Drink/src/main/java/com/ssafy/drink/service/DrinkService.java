package com.ssafy.drink.service;

import com.ssafy.drink.domain.Drink;
import com.ssafy.drink.dto.ResponseDrinkTag;

import java.util.List;
import java.util.Map;

public interface DrinkService {
    List<ResponseDrinkTag> retrieveDrinks();
    Map<String, Object> retrieveDrinkInfo(Long drinkIndex);

    List<String> retrieveDrinkName();
}
