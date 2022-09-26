package com.ssafy.drink.service;

import com.ssafy.drink.domain.Feed;
import com.ssafy.drink.dto.RegistFeed;
import com.ssafy.drink.dto.UpdateFeed;

import java.util.List;

public interface FeedService {
    Long registFeed(RegistFeed registFeed, Long memberIndex);

    Feed retrieveFeed(Long feedIndex);

    List<Feed> retrieveFeedList();

    boolean updateFeed(UpdateFeed updateFeed);

    boolean deleteFeed(Long feedIndex);

}
