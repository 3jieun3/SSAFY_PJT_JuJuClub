package com.ssafy.drink.service;

import com.ssafy.drink.domain.Drink;
import com.ssafy.drink.repository.DrinkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DrinkServiceImpl implements DrinkService{

    @Autowired
    DrinkRepository drinkRepository;

    @Override
    public List<Drink> retrieveDrinks() {
        return drinkRepository.findAll();
    }

    @Override
    public Drink retrieveDrink(Long drinkIndex) {
        return drinkRepository.findById(drinkIndex).orElseThrow(RuntimeException::new);
    }
}
