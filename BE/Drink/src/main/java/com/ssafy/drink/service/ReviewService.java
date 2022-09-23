package com.ssafy.drink.service;

import com.ssafy.drink.dto.RegistReview;

public interface ReviewService {
    boolean registReview(RegistReview registReview, Long memberIndex);
}
