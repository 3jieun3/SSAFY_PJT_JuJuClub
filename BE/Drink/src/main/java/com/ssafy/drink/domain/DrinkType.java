package com.ssafy.drink.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
public class DrinkType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long drinkTypeIndex;

    private String drinkType;
}
