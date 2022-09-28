package com.ssafy.drink.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface S3UploadService {
    public String upload(MultipartFile file) throws IOException;
}
