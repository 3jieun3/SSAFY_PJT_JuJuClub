package com.ssafy.drink.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class SelectedTags {
    private Long drinkType;
    private String abv;
    private String acidity;
    private String sweetness;
    private String fruit;
    private String body;
    private List<String> tags;
}
