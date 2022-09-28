package com.ssafy.drink.dto;

import com.ssafy.drink.domain.Drink;
import lombok.Data;

@Data
public class DrinkRecommend {
    Drink drink;
    int count;
}
