package com.ssafy.drink.service;

import com.ssafy.drink.dto.RegistReview;
import com.ssafy.drink.dto.UpdateReview;

public interface ReviewService {
    boolean registReview(RegistReview registReview, Long memberIndex);
    boolean updateReview(UpdateReview updateReview);

    boolean deleteReview(Long deleteReview);
}
