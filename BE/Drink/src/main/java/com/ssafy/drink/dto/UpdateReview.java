package com.ssafy.drink.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class UpdateReview {

    private Long reviewIndex;
    private String review;
    private int score;

}
