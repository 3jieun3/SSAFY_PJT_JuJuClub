package com.ssafy.drink.service;

import com.ssafy.drink.domain.*;
import com.ssafy.drink.dto.RegistFeed;
import com.ssafy.drink.dto.UpdateFeed;
import com.ssafy.drink.repository.DrinkRepository;
import com.ssafy.drink.repository.FeedRepository;
import com.ssafy.drink.repository.MemberRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class FeedServiceImpl implements FeedService{

    public static final Logger logger = LoggerFactory.getLogger(FeedServiceImpl.class);

    @Autowired
    FeedRepository feedRepository;

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    DrinkRepository drinkRepository;

    @Autowired
    S3UploadService s3UploadService;


    // 피드 등록
    @Override
    @Transactional
    public Long registFeed(RegistFeed registFeed, Long memberIndex) throws IOException {

        Drink drink = drinkRepository.findById(registFeed.getDrinkIndex()).orElseThrow(RuntimeException::new);
        logger.info("피드에 등록할 술 정보 : {}", drink);

        Member member = memberRepository.findById(memberIndex).orElseThrow(RuntimeException::new);
        logger.info("피드를 작성한 멤버 정보 : {}", member);

        String imgUrl = null;
        if(registFeed.getImgFile().isEmpty() || registFeed.getImgFile().getOriginalFilename().isEmpty()) {
            imgUrl = null;
        } else {
            imgUrl = s3UploadService.upload(registFeed.getImgFile());
        }

        Feed feed = Feed.builder()
                .drink(drink)
                .title(registFeed.getTitle())
                .content(registFeed.getContent())
                .member(member)
                .likeCount(0)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .customTags(registFeed.getCustomTags())
                .imageUrl(imgUrl)
                .build();
        logger.info("작성한 피드 정보 : {}", feed);

        Long feedIndex = feedRepository.save(feed).getFeedIndex();
        feedRepository.flush();

        return feedIndex;
    }

    // 피드 상세 정보
    @Override
    public Feed retrieveFeed(Long feedIndex) {
        Feed feed = feedRepository.findById(feedIndex).orElseThrow(RuntimeException::new);
        logger.info("피드 상세보기 결과 : {}", feed);
        return feed;
    }

    // 피드 전체 리스트 조회
    @Override
    public Map<String, Object>  retrieveFeedList() {
        List<Feed> bestFeeds = feedRepository.selectAllLike3();
        List<Feed> feeds = feedRepository.findAllByOrderByCreatedAtDesc();

        Map<String, Object> map = new HashMap<>();
        map.put("bestfeeds", bestFeeds);
        map.put("feeds", feeds);

        return map;
    }

    // 피드 수정
    @Override
    public boolean updateFeed(UpdateFeed updateFeed) throws IOException {
        Feed feed = feedRepository.findById(updateFeed.getFeedIndex()).orElseThrow(RuntimeException::new);

        Drink drink = drinkRepository.findById(updateFeed.getDrinkIndex()).orElseThrow(RuntimeException::new);
        logger.info("피드에서 수정할 술 정보 : {}", drink);

        String imgUrl = s3UploadService.upload(updateFeed.getImgFile());

        feed.setTitle(updateFeed.getTitle());
        feed.setContent(updateFeed.getContent());
        feed.setCustomTags(updateFeed.getCustomTags());
        feed.setDrink(drink);
        feed.setUpdatedAt(LocalDateTime.now());
        feed.setImageUrl(imgUrl);

        logger.info("수정한 피드 정보 : {}", feed);

        try {
            feedRepository.save(feed);
            feedRepository.flush();
        } catch(Exception e) {
            return false;
        }

        return true;
    }

    // 피드 삭제
    @Override
    public boolean deleteFeed(Long feedIndex) {
        Feed feed = feedRepository.findById(feedIndex).orElseThrow(RuntimeException::new);
        try {
            feedRepository.delete(feed);
        } catch(Exception e) {
            return false;
        }

        return true;
    }



}
