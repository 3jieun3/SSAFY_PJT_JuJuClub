package com.ssafy.drink.service;

import java.util.Map;

public interface MainService {

    Map<String, Object> todayDrink();
    Map<String, Object> weatherDrink(String weather);
}
