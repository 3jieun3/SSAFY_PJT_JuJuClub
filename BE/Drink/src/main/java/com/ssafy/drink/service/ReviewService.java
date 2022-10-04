package com.ssafy.drink.service;

import com.ssafy.drink.dto.RegistReview;
import com.ssafy.drink.dto.UpdateReview;

import java.util.Map;

public interface ReviewService {
    Map<String, Object> registReview(RegistReview registReview, Long memberIndex);
    boolean updateReview(UpdateReview updateReview);

    boolean deleteReview(Long deleteReview);


}
