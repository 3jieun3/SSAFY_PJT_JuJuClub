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
public class Feed {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedIndex;

    @ManyToOne
    @JoinColumn(name = "drinkIndex")
    private Drink drink;

    private String title;

    private String content;

    private Long memberIndex;

    private int likeCount;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private String customTags;


}
