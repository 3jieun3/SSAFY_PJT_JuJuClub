package com.ssafy.drink.service;

import com.ssafy.drink.domain.Feed;
import com.ssafy.drink.domain.LikeFeed;
import com.ssafy.drink.domain.LikeFeedKey;
import com.ssafy.drink.domain.Member;
import com.ssafy.drink.repository.FeedRepository;
import com.ssafy.drink.repository.LikeFeedRepository;
import com.ssafy.drink.repository.MemberRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeServiceImpl implements LikeService {

    public static final Logger logger = LoggerFactory.getLogger(LikeServiceImpl.class);

    @Autowired
    LikeFeedRepository likeFeedRepository;

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    FeedRepository feedRepository;

    @Override
    public boolean likeFeed(Long memberIndex, Long feedIndex) {

        Member member = memberRepository.findById(memberIndex).orElseThrow(RuntimeException::new);
        Feed feed = feedRepository.findById(feedIndex).orElseThrow(RuntimeException::new);

        // likeFeedKey 생성
        LikeFeedKey likeFeedKey = LikeFeedKey.builder()
                .memberIndex(memberIndex)
                .feedIndex(feedIndex)
                .build();

        boolean isLiked = isLiked(likeFeedKey); // 좋아요를 누른 피드이면 true, 아니면 false 리턴
        logger.info("is liked ? {}", isLiked);

        if(isLiked) { // 이미 좋아요를 누른 피드 -> 좋아요 취소 및 likeCount--
            LikeFeed findLikeFeed = likeFeedRepository.findById(likeFeedKey).orElseThrow(RuntimeException::new);
            minusLikeCount(findLikeFeed.getFeed());
            try {
                likeFeedRepository.delete(findLikeFeed);
            } catch(Exception e) {
                return false;
            }
        }
        else {
            LikeFeed likeFeed = LikeFeed.builder()
                .likeFeedIndex(likeFeedKey)
                .member(member)
                .feed(feed)
                .build();
            plusLikeCount(feed);
            logger.info("likeFeed is {}", likeFeed);
            try {
                likeFeedRepository.save(likeFeed);
                feedRepository.flush();
            } catch(Exception e) {
                return false;
            }
        }

        return true;
    }

    public boolean isLiked(LikeFeedKey likeFeedKey) {

        Boolean flag = likeFeedRepository.existsById(likeFeedKey);
        if(!flag) {
            return false;
        }
        return true;
    }

    // Feed likeCount 증가
    public boolean plusLikeCount(Feed feed) {

        feed.setLikeCount(feed.getLikeCount() + 1);
        try {
            feedRepository.save(feed);
            feedRepository.flush();
        } catch(Exception e) {
            return false;
        }

        return true;
    }

    // Feed likeCount 감소
    public boolean minusLikeCount(Feed feed) {

        if(feed.getLikeCount() > 0) {
            feed.setLikeCount(feed.getLikeCount() - 1);
        } else {
            feed.setLikeCount(0);
        }
        try {
            feedRepository.save(feed);
            feedRepository.flush();
        } catch(Exception e) {
            return false;
        }

        return true;
    }
}
