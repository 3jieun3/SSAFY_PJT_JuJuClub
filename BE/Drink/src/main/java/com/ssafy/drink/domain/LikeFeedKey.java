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
@Embeddable
@Builder
public class LikeFeedKey implements Serializable {

    @Column(name = "memberIndex")
    Long memberIndex;

    @Column(name = "feedIndex")
    Long feedIndex;
}
