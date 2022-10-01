package com.ssafy.drink.controller;

import com.ssafy.drink.dto.RegistReview;
import com.ssafy.drink.dto.UpdateReview;
import com.ssafy.drink.service.ReviewService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Api("ReviewController")
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "X-AUTH-TOKEN", maxAge = 3600)
@RequestMapping("/review")
public class    ReviewController {

    public static final Logger logger = LoggerFactory.getLogger(ReviewController.class);

    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    ReviewService reviewService;

    @ApiOperation(value = "리뷰 등록", notes = "drinkIndex, score, review 를 받아 리뷰 등록한다.")
    @PostMapping
    public ResponseEntity<Map<String, Object>> registReview(@RequestBody  @ApiParam(value = "필요한 정보(drinkIndex, score, review)",required = true) RegistReview registReview, HttpServletRequest request) {
        logger.debug("리뷰 등록 API 호출 : {}", registReview);

        // Token에서 MemberIndex를 추출
        Long memberIndex = (Long)request.getAttribute("memberIndex");
        System.out.println("ReviewController memberIndex : " + memberIndex);
        Map<String, Object> map = reviewService.registReview(registReview, memberIndex);

        return new ResponseEntity<>(map, HttpStatus.OK);
    }
    @ApiOperation(value = "리뷰 수정", notes = "reviewIndex, score, review를 받아 리뷰를 수정한다.")
    @PutMapping
    public ResponseEntity<String> updateReview(@RequestBody @ApiParam(value = "필요한 정보(reviewIndex, score, review)",required = true) UpdateReview updateReview) {
        logger.debug("리뷰 수정 API 호출 : {}", updateReview);
        if(reviewService.updateReview(updateReview)) {
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<String>(FAIL, HttpStatus.FORBIDDEN);
    }

    @ApiOperation(value = "리뷰 삭제", notes = "reviewIndex를 받아 리뷰를 삭제한다.")
    @DeleteMapping
    public ResponseEntity<String> deleteReview(@RequestBody  @ApiParam(value = "필요한 정보(reviewIndex)",required = true) Map<String, String> deleteReview) {
        logger.debug("리뷰 삭제 API 호출 : {}", deleteReview);
        Long reviewIndex = Long.parseLong(deleteReview.get("reviewIndex"));

        if(reviewService.deleteReview(reviewIndex)) {
            return new ResponseEntity<>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<>(FAIL, HttpStatus.FORBIDDEN);
    }
}
