package com.ssafy.drink.dto;

import lombok.Data;

@Data
public class RecommendDto {
    private int startAge;
    private int endAge;
    private char gender;
    private double startAbv;
    private double endAbv;
    private boolean tag;    //True 이면 달달함
    private boolean Fruit;  //True 이면 배열돌려서 찾기
}
