package com.ssafy.drink.service;

import com.ssafy.drink.domain.Drink;
import com.ssafy.drink.domain.TagDrink;

import java.util.List;

public interface RecommendService {

    public List<Drink> findDrinkByAge(int startAge, int endAge);

    public List<Drink> findDrinkByGender(char gender);
    public List<Drink> findDrinkByAbv(double startAbv, double endAbv);
    public List<Drink> findDrinkByTag();
    public List<Drink> findDrinkByTags();
    public Drink findByDrinkIndex3(Long drinkIndex);
    public List<String> findByTagList(Drink drink);
}
