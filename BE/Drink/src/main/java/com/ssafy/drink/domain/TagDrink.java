package com.ssafy.drink.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity
public class TagDrink {

    @EmbeddedId
    TagDrinkKey tagDrinkKey;

    @ManyToOne
    @MapsId("drinkIndex")
    @JoinColumn(name = "drinkIndex")
    private Drink drink;

    @ManyToOne
    @MapsId("tagIndex")
    @JoinColumn(name = "tagIndex")
    private Tag tag;
}
