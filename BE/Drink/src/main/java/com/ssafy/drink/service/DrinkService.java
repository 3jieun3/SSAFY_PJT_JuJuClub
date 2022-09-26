package com.ssafy.drink.service;

import com.ssafy.drink.domain.Drink;

import java.util.List;
import java.util.Map;

public interface DrinkService {
    List<Drink> retrieveDrinks();
    Map<String, Object> retrieveDrinkInfo(Long drinkIndex);

    List<String> retrieveDrinkName();
}
