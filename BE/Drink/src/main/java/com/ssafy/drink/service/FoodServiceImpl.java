package com.ssafy.drink.service;

import com.ssafy.drink.controller.DrinkController;
import com.ssafy.drink.domain.DrinkType;
import com.ssafy.drink.domain.Food;
import com.ssafy.drink.domain.FoodDrinkType;
import com.ssafy.drink.repository.FoodDrinkTypeRepository;
import com.ssafy.drink.repository.FoodRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Service
public class FoodServiceImpl implements FoodService{

    public static final Logger logger = LoggerFactory.getLogger(FoodServiceImpl.class);

    @Autowired
    FoodDrinkTypeRepository foodDrinkTypeRepository;

    @Autowired
    FoodRepository foodRepository;

    @Override
    public Food getFoods(DrinkType drinkType) {

        return null;
    }
}
