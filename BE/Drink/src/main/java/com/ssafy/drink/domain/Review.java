package com.ssafy.drink.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewIndex;

    @ManyToOne
    @JoinColumn(name = "memberIndex")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "drinkIndex")
    private Drink drink;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private String weekday;

    private String memberId;

    private int age;

    private char gender;

    private int score;

    private String review;

    private boolean isCrawled;
}
