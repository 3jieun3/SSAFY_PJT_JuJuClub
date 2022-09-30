package com.ssafy.drink.controller;

import com.ssafy.drink.domain.Feed;
import com.ssafy.drink.dto.RegistFeed;
import com.ssafy.drink.dto.RegistNoFile;
import com.ssafy.drink.dto.UpdateFeed;
import com.ssafy.drink.service.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Api("FeedController")
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "X-AUTH-TOKEN", maxAge = 3600)
@RequestMapping("/feed")
public class FeedController {

    public static final Logger logger = LoggerFactory.getLogger(FeedController.class);

    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    FeedService feedService;

    @Autowired
    LikeService likeService;

    @Autowired
    LikeFeedService likeFeedService;

    @ApiOperation(value = "피드 등록", notes = "title, content, drinkIndex, customTags를 받아 피드를 등록 후 feedIndex를 반환한다.")
    @PostMapping("/valid")
    public ResponseEntity<Map<String, String>> registReview( @ApiParam(value = "필요한 정보(title, content, drinkIndex, customTags, imgFile)",required = true) RegistFeed registFeed ,  HttpServletRequest request) throws IOException {
//        RegistFeed registFeed = RegistFeed.builder()
//                .content(registNoFile.getContent())
//                .customTags(registNoFile.getCustomTags())
//                .drinkIndex(registNoFile.getDrinkIndex())
//                .title(registNoFile.getTitle())
//                .imgFile(file)
//                .build();
        logger.debug("피드 등록 API 호출 : {}", registFeed);

        // Token에서 memberIndex를 추출
        Long memberIndex = (Long)request.getAttribute("memberIndex");
        logger.info("FeedService Post memberIndex : {}", memberIndex);

        // 피드 등록 후 생성된 feedIndex
        Long feedIndex = feedService.registFeed(registFeed, memberIndex);

        Map<String, String> map = new HashMap<>();
        map.put("message", SUCCESS);
        map.put("feedIndex", feedIndex.toString());

        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @ApiOperation(value = "피드 전체 정보", notes = "등록된 전체 피드 정보를 확인한다.")
    @GetMapping
    public ResponseEntity<Map<String, Object>> retrieveFeedList() {
        logger.info("피드 전체보기 API 호출");
        Map<String, Object>  map = feedService.retrieveFeedList();

        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @ApiOperation(value = "피드 수정", notes = "feedIndex, title, content, drinkIndex, customTags를 받아 피드를 수정한다.")
    @PutMapping("valid")
    public ResponseEntity<String> updateFeed(@ApiParam(value = "필요한 정보(feedIndex, title, content, drinkIndex, customTags)",required = true) UpdateFeed updateFeed) throws IOException {
        logger.info("피드 수정 API 호출 : {}", updateFeed);
        if(feedService.updateFeed(updateFeed)) {
            return new ResponseEntity<>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<>(FAIL, HttpStatus.FORBIDDEN);
    }
    
    @ApiOperation(value="피드 삭제", notes = "feedIndex를 받아 피드를 삭제한다.")
    @DeleteMapping("valid")
    public ResponseEntity<String> deleteFeed(@RequestBody @ApiParam(value = "필요한 정보(feedIndex)",required = true) Map<String, String> deleteFeed) {
        logger.info("피드 삭제 API 호출 : {}", deleteFeed);

        Long feedIndex = Long.parseLong(deleteFeed.get("feedIndex"));
        if(feedService.deleteFeed(feedIndex)) {
            return new ResponseEntity<>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<>(FAIL, HttpStatus.FORBIDDEN);

    }

    @ApiOperation(value="피드 좋아요/취소", notes = "feedIndex를 받아 피드를 좋아요 또는 좋아요 취소를 한다.")
    @PostMapping("valid/like")
    public ResponseEntity<String> likeFeed(@RequestBody @ApiParam(value = "필요한 정보(feedIndex)",required = true) Map<String, String> likeFeed, HttpServletRequest request) {

        Long memberIndex = (Long) request.getAttribute("memberIndex");
        Long feedIndex = Long.parseLong(likeFeed.get("feedIndex"));

        logger.info("피드 좋아요/취소 API 호출 : {} | {} ", memberIndex, feedIndex);

        if(likeService.likeFeed(memberIndex, feedIndex)) {
            return new ResponseEntity<>(SUCCESS, HttpStatus.OK);
        }

        return new ResponseEntity<>(FAIL, HttpStatus.FORBIDDEN);
    }

    // feedIndex를 좋아요 한 memberIndex 리스트
    @GetMapping("like/{feedIndex}")
    public ResponseEntity<Map<String, Object>> likeMemberList(@PathVariable Long feedIndex) {

        List<Long> memberIndexList = likeFeedService.likeMemberList(feedIndex);
        logger.info("memberIndexList : {}", memberIndexList);
        Map<String, Object> map = new HashMap<>();
        map.put("likeList", memberIndexList);

        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @ApiOperation(value = "피드 상세 정보", notes = "{feedIndex}를 받아 피드의 상세 정보를 확인한다.")
    @GetMapping("{feedIndex}")
    public ResponseEntity<Map<String, Object>> retrieveFeed(@PathVariable Long feedIndex, HttpServletRequest request) {
        logger.debug("피드 상세보기 API 호출 : {}", feedIndex);

        Map<String, Object> map = new HashMap<>();
        Feed feed = feedService.retrieveFeed(feedIndex);

        if(feed != null) {
            map.put("feed", feed);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }

        map.put("message", FAIL);
        return new ResponseEntity<>(map, HttpStatus.FORBIDDEN);
    }



}
