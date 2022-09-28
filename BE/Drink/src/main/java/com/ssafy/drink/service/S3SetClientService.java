package com.ssafy.drink.service;

import com.amazonaws.services.s3.AmazonS3;

public interface S3SetClientService {
    public AmazonS3 setS3Client();
}
