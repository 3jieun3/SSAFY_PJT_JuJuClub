package com.ssafy.drink.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Builder
public class FoodDrinkType {

    @EmbeddedId
    FoodDrinkTypeKey foodDrinkTypeKey;

    @ManyToOne
    @MapsId("foodIndex")
    @JoinColumn(name = "foodIndex")
    private Food food;

    @ManyToOne
    @MapsId("drinkTypeIndex")
    @JoinColumn(name = "drinkTypeIndex")
    private DrinkType drinkType;
}
