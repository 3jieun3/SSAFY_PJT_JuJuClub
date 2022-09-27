package com.ssafy.drink.service;

import com.ssafy.drink.domain.Feed;
import com.ssafy.drink.domain.LikeFeed;
import com.ssafy.drink.repository.FeedRepository;
import com.ssafy.drink.repository.LikeFeedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LikeFeedServiceImpl implements LikeFeedService {

    @Autowired
    LikeFeedRepository likeFeedRepository;

    @Autowired
    FeedRepository feedRepository;

    @Override
    public List<Long> likeMemberList(Long feedIndex) {

        Feed feed = feedRepository.findById(feedIndex).orElseThrow(RuntimeException::new);
        List<LikeFeed> likeFeedList = likeFeedRepository.findByFeed(feed);

        List<Long> memberIndexList = new ArrayList<>();
        for(int i = 0; i < likeFeedList.size(); i++) {
            memberIndexList.add(likeFeedList.get(i).getMember().getMemberIndex());
        }

        return memberIndexList;
    }
}
