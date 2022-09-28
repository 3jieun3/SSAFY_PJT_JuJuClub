package com.ssafy.drink.controller;


import com.ssafy.drink.service.MainService;
import com.ssafy.drink.service.ReviewService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.jboss.jandex.Main;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Api("MainController")
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "X-AUTH-TOKEN", maxAge = 3600)
@RequestMapping("/main")
public class MainController {

    private static final Logger logger = LoggerFactory.getLogger(MainController.class);

    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    MainService mainService;

    @ApiOperation(value = "오늘의 술 추천(요일별)", notes = "현재 요일에 가장 많이 먹은 술을 반환한다.(리뷰기준)")
    @GetMapping("/day")
    public ResponseEntity<Map<String, Object>> todayDrink() {
        Map<String, Object> map = new HashMap<>();
        map = mainService.todayDrink();


        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @ApiOperation(value = "오늘의 술 추천(날씨별)", notes = "현재 날씨에 어울리는 술을 반환한다.")
    @GetMapping("/weather/{weather}")
    public ResponseEntity<Map<String, Object>> todayDrink(@PathVariable @ApiParam(value = "필요한 정보(현재 날씨 상태)", required = true) String weather) {
        Map<String, Object> map = mainService.weatherDrink(weather);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }



}
