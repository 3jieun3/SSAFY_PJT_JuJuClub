package com.ssafy.drink.controller;

import com.ssafy.drink.dto.RegistReview;
import com.ssafy.drink.service.ReviewService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Api("ReviewController")
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "X-AUTH-TOKEN", maxAge = 3600)
@RequestMapping("/review")
public class ReviewController {

    public static final Logger logger = LoggerFactory.getLogger(ReviewController.class);

    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    ReviewService reviewService;

    @ApiOperation(value = "리뷰 등록", notes = "drinkIndex, score, review 를 받아 리뷰 등록한다.")
    @PostMapping
    public ResponseEntity<String> registReview(@RequestBody RegistReview registReview, HttpServletRequest request) {
        logger.debug("리뷰 등록 API 호출 : {}", registReview);

        // Token에서 MemberIndex를 추출
        Long memberIndex = (Long)request.getAttribute("memberIndex");
        System.out.println("ReviewController memberIndex : " + memberIndex);
        if(reviewService.registReview(registReview, memberIndex)) {
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<String>(FAIL, HttpStatus.FORBIDDEN);
    }

}
