package com.ssafy.drink.service;

import com.ssafy.drink.domain.Drink;

import java.util.List;

public interface DrinkService {
    List<Drink> retrieveDrinks();

    Drink retrieveDrink(Long drinkIndex);
}
