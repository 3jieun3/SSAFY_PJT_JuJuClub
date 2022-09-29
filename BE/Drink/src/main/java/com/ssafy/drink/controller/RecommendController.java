package com.ssafy.drink.controller;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.ssafy.drink.domain.Drink;
import com.ssafy.drink.domain.TagDrink;
import com.ssafy.drink.dto.CountTagDrink;
import com.ssafy.drink.dto.DrinkRecommend;
import com.ssafy.drink.dto.RecommendDto;
import com.ssafy.drink.service.RecommendService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@Api("Recommend Controller")
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "X-AUTH-TOKEN", maxAge = 3600)
@RequestMapping("/recommend")
public class RecommendController {

    @Autowired
    RecommendService recommendService;


    @ApiOperation(value = "태그기반 술 추천", notes = "키워드 들을 List로 주면 키워드 기반의 술 추천")
    @PostMapping
    public ResponseEntity<List<DrinkRecommend>> recommendList(@RequestBody @ApiParam(value = "필요한정보(나이,F or M, abv, True of False, True or False )", required = true) RecommendDto recommendDto){
        List<Drink> DrinkList = new ArrayList<>();

        int startAge = recommendDto.getStartAge();
        int endAge = recommendDto.getEndAge();
        char gender = recommendDto.getGender();
        double startAbv = recommendDto.getStartAbv();
        double endAbv = recommendDto.getEndAbv();
        boolean sweetness = recommendDto.isTag();
        boolean Fruit = recommendDto.isFruit();

        DrinkList.addAll(recommendService.findDrinkByAge(startAge,endAge));
        DrinkList.addAll(recommendService.findDrinkByGender(gender));
        DrinkList.addAll(recommendService.findDrinkByAbv(startAbv,endAbv));
        if (sweetness){
            DrinkList.addAll(recommendService.findDrinkByTag());
        }
        if (Fruit){
            DrinkList.addAll(recommendService.findDrinkByTags());
        }

        PriorityQueue<CountTagDrink> pq = new PriorityQueue<>();

        for (Drink drink : DrinkList){
            CountTagDrink countTagDrink = new CountTagDrink();
            int count = Collections.frequency(DrinkList, drink);
            countTagDrink.setCount(count);
            countTagDrink.setDrinkIndex(drink.getDrinkIndex());
            pq.add(countTagDrink);
        }

        List<DrinkRecommend> high3 = new ArrayList<>();
        for (int i=0 ; i < 3 ; i++){
            CountTagDrink countTagDrink = pq.poll();
            DrinkRecommend drinkRecommend = new DrinkRecommend();
            Drink drink =  recommendService.findByDrinkIndex3(countTagDrink.getDrinkIndex());
            List<String> tagList = recommendService.findByTagList(drink);
            drinkRecommend.setDrink(drink);
            drinkRecommend.setCount(countTagDrink.getCount());
            drinkRecommend.setTags(tagList);
            high3.add(drinkRecommend);

        }

        return new ResponseEntity<>(high3, HttpStatus.OK);
    }

}
