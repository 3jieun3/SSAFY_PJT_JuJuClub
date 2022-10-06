package com.ssafy.drink.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
public class LikeFeed implements Serializable {

    @EmbeddedId
    LikeFeedKey likeFeedIndex;


    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @MapsId("memberIndex")
    @JoinColumn(name = "memberIndex")
    private Member member;


    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @MapsId("feedIndex")
    @JoinColumn(name = "feedIndex")
    private Feed feed;
}
