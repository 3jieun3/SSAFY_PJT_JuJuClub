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
public class Drink {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long drinkIndex;

    private String drinkName;

    @ManyToOne
    @JoinColumn(name = "drinkTypeIndex")
    private DrinkType drinkType;

    private int abv;

    @Column(length = 1024)
    private String ingredient;

    private String volume;

    private String description;

    private String imageUrl;

}
