package com.ssafy.drink.mapping;

import java.time.LocalDateTime;

public interface ReviewMapping {
    Long getReviewIndex();
    LocalDateTime getCreatedAt();
    String getMemberId();
    int getScore();
    String getReview();
}
