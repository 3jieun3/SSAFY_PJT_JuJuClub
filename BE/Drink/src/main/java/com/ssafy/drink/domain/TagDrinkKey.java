package com.ssafy.drink.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Embeddable
public class TagDrinkKey implements Serializable {

    @Column(name = "drinkIndex")
    private Long drinkIndex;

    @Column(name = "tagIndex")
    private Long tagIndex;
}
