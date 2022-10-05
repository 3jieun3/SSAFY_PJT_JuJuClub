package com.ssafy.drink.dto;

import com.ssafy.drink.domain.Feed;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class ResponseFeed {
    private Feed feed;
    private List<Long> likeMemberIndex;
}
