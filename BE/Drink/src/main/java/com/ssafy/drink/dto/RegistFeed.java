package com.ssafy.drink.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class RegistFeed {

    private String title;
    private String content;
    private Long drinkIndex;
    private String customTags;

}
