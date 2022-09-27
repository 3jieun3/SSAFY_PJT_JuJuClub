package com.ssafy.drink.service;

import com.ssafy.drink.domain.Feed;
import com.ssafy.drink.dto.RegistFeed;
import com.ssafy.drink.dto.UpdateFeed;

import java.io.IOException;
import java.util.List;
import java.util.Map;

public interface FeedService {
    Long registFeed(RegistFeed registFeed, Long memberIndex) throws IOException;

    Feed retrieveFeed(Long feedIndex);

    Map<String, Object> retrieveFeedList();

    boolean updateFeed(UpdateFeed updateFeed) throws IOException;

    boolean deleteFeed(Long feedIndex);

}
