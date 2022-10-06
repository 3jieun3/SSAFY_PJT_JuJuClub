package com.ssafy.drink.dto;

import com.ssafy.drink.domain.Drink;
import lombok.Data;

import java.util.List;

@Data
public class DrinkRecommend {
    Drink drink;
    int count;
    List<String> tags;
}
