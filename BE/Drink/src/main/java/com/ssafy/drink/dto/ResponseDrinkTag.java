package com.ssafy.drink.dto;

import com.ssafy.drink.domain.Drink;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class ResponseDrinkTag {
    Drink drink;
    List<String> tags;

}
