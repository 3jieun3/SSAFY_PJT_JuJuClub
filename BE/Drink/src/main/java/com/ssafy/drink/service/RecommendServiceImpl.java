package com.ssafy.drink.service;

import com.ssafy.drink.domain.Drink;
import com.ssafy.drink.repository.DrinkRepository;
import com.ssafy.drink.repository.ReviewRepository;
import com.ssafy.drink.repository.TagDrinkRepository;
import com.ssafy.drink.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RecommendServiceImpl implements RecommendService{

    public List<Integer> TagIndexes =  Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    TagRepository tagRepository;
    @Autowired
    DrinkRepository drinkRepository;
    @Autowired
    TagDrinkRepository tagDrinkRepository;

    @Override
    public List<Drink> findDrinkByAge(int startAge, int endAge){
        System.out.println("시작");
        System.out.println(reviewRepository.findDrinkIndexByAge(startAge, endAge));
        List<Long> drinkIndexes = reviewRepository.findDrinkIndexByAge(startAge, endAge);
        List<Drink> returnDrink = new ArrayList<>();
        for(Long drinkIndex : drinkIndexes){
           returnDrink.add(drinkRepository.findById(drinkIndex).orElseThrow(RuntimeException::new));
        }
        return returnDrink;
    }

    @Override
    public List<Drink> findDrinkByGender(char gender){
        List<Long> drinkIndexes = reviewRepository.findBydrinkIndexGender(gender);
        List<Drink> resultDrinkList = new ArrayList<>();
        for (Long drinkIndex : drinkIndexes){
            resultDrinkList.add(drinkRepository.findById(drinkIndex).orElseThrow(RuntimeException::new));
        }
         return resultDrinkList;
    }

    @Override
    public List<Drink> findDrinkByAbv(double startAbv, double endAbv){
       List<Long> drinkIndexes =  drinkRepository.findDrinkIndexByAbv(startAbv*0.01, endAbv*0.01);
       List<Drink> drinkList = new ArrayList<>();
       for (Long drinkIndex : drinkIndexes){
           drinkList.add(drinkRepository.findById(drinkIndex).orElseThrow(RuntimeException::new));
       }
       return drinkList;
    }

    //tagIndex 57
    @Override
    public List<Drink> findDrinkByTag(){
        List<Drink> drinkList = new ArrayList<>();
        List<Long> drinkIndexes = tagDrinkRepository.findByTag(57);
        for (Long drinkIndex : drinkIndexes){
            drinkList.add(drinkRepository.findById(drinkIndex).orElseThrow(RuntimeException::new));
        }
        return drinkList;
    }

    @Override
    public List<Drink> findDrinkByTags(){
        List<Long> drinkIndexes = new ArrayList<>();
        for (int tagIndex : TagIndexes){
            drinkIndexes.addAll(tagRepository.findByTagIndexDrinkIndex(tagIndex));
        }
        List<Drink> resultDrink = new ArrayList<>();
        //중복제거된 drinkindex들
        List<Long> disDrinkIndexes = drinkIndexes.stream().distinct().collect(Collectors.toList());
        for(Long drinkIndex : disDrinkIndexes){
            resultDrink.add(drinkRepository.findById(drinkIndex).orElseThrow(RuntimeException::new));
        }

        return resultDrink;

    }

    @Override
    public Drink findByDrinkIndex3(Long drinkIndex){
        return drinkRepository.findById(drinkIndex).orElseThrow(RuntimeException::new);
    }

}
