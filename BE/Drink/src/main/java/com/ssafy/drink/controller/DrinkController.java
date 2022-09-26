package com.ssafy.drink.controller;

import com.ssafy.drink.domain.Drink;
import com.ssafy.drink.service.DrinkService;
import com.ssafy.drink.service.FoodService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Api("DrinkController")
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "X-AUTH-TOKEN", maxAge = 3600)
@RequestMapping("/info")
public class DrinkController {

    public static final Logger logger = LoggerFactory.getLogger(DrinkController.class);

    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    DrinkService drinkService;
    @Autowired
    FoodService foodService;
    @Autowired


    @ApiOperation(value = "전체 술 정보", notes = "전체 술에 대한 정보를 반환한다.")
    @GetMapping
    public ResponseEntity<Map<String, Object>> retrieveDrinks() {
        Map<String, Object> map = new HashMap<>();
        List<Drink> drinks = drinkService.retrieveDrinks();
        map.put("drinks", drinks);

        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @ApiOperation(value = "술 상세 정보", notes = "drinkIndex를 받아 해당 술에 대한 상세 정보를 반환한다.")
    @GetMapping("{drinkIndex}")
    public ResponseEntity<Map<String, Object>> retrieveDrink(@PathVariable @ApiParam(value = "필요한 정보(drinkIndex)", required = true) Long drinkIndex) {
        Map<String, Object> map = new HashMap<>();
        map = drinkService.retrieveDrinkInfo(drinkIndex);
//        map.put("drink", drink);


        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @ApiOperation(value = "술 이름 리스트", notes = "전체 술에 대한 이름을 반환한다.")
    @GetMapping("/drink")
    public ResponseEntity< Map<String, Object>> retrieveDrinkName() {
        Map<String, Object> map = new HashMap<>();
        List<String> drinkNameList =  drinkService.retrieveDrinkName();
        map.put("drinkNameList", drinkNameList);

        return new ResponseEntity<>(map, HttpStatus.OK);
    }


}
