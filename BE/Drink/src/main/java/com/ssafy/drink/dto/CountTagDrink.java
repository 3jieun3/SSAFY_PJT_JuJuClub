package com.ssafy.drink.dto;

import com.ssafy.drink.domain.Drink;
import com.ssafy.drink.domain.DrinkType;
import com.ssafy.drink.domain.Tag;
import lombok.Data;

import javax.persistence.*;

@Data
public class CountTagDrink implements Comparable<CountTagDrink>{
    private Long drinkIndex;
    private int count;

    @Override
    public int compareTo(CountTagDrink countTagDrink) {
        if (countTagDrink.count - this.count < 0){
            return -1;
        }else{
            return 1;
        }
    }
}
