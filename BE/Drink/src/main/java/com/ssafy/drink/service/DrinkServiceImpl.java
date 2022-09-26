package com.ssafy.drink.service;

import com.ssafy.drink.controller.FeedController;
import com.ssafy.drink.domain.Drink;
import com.ssafy.drink.domain.Food;
import com.ssafy.drink.domain.FoodDrinkType;
import com.ssafy.drink.domain.Review;
import com.ssafy.drink.mapping.ReviewMapping;
import com.ssafy.drink.repository.DrinkRepository;
import com.ssafy.drink.repository.FoodDrinkTypeRepository;
import com.ssafy.drink.repository.ReviewRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class DrinkServiceImpl implements DrinkService{

    public static final Logger logger = LoggerFactory.getLogger(DrinkServiceImpl.class);

    @Autowired
    DrinkRepository drinkRepository;

    @Autowired
    ReviewRepository reviewRepository;


    @Autowired
    FoodDrinkTypeRepository foodDrinkTypeRepository;

    @Override
    public List<Drink> retrieveDrinks() {
        return drinkRepository.findAll();
    }

    @Override
    public Map<String, Object> retrieveDrinkInfo(Long drinkIndex) {


        Drink drink = drinkRepository.findById(drinkIndex).orElseThrow(RuntimeException::new); // 술 상세정보
        List<ReviewMapping> reviewList = reviewRepository.findByDrink(drink);
        List<FoodDrinkType> foodDrinkList = foodDrinkTypeRepository.findByDrinkType(drink.getDrinkType());

        int numbers[] = new int[3];
        Random rand = new Random();
        for(int i = 0; i < numbers.length; i++) {
            numbers[i] = rand.nextInt(foodDrinkList.size());

            for(int j = 0; j < i; j++) {
                if(numbers[i] == numbers[j]) {
                    i--;
                }
            }
        }

        logger.info(Arrays.toString(numbers));

        List<Food> foodList = new ArrayList<>();
        for(int i = 0; i < numbers.length; i++) {
            foodList.add(foodDrinkList.get(numbers[i]).getFood());
        }

        Map<String, Object> map = new HashMap<>();
        map.put("drink", drink);
        map.put("reviews", reviewList);
        map.put("foods", foodList);

        return map;

    }


}
