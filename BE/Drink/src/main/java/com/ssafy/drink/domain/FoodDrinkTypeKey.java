package com.ssafy.drink.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Embeddable
public class FoodDrinkTypeKey implements Serializable {

    @Column(name = "foodIndex")
    private long foodIndex;

    @Column(name = "drinkTypeIndex")
    private long drinkTypeIndex;
}
