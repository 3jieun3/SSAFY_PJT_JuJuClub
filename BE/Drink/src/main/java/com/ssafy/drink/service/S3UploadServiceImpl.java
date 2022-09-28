package com.ssafy.drink.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.DependsOn;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
@DependsOn(value = {"S3Setup"})
public class S3UploadServiceImpl implements S3UploadService{

    @Autowired
    S3SetClientService s3SetClientService;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    private AmazonS3 s3Client;
    @Override
    public String upload(MultipartFile file) throws IOException {
       s3Client = s3SetClientService.setS3Client();
       String fileName = file.getOriginalFilename();

       //s3객체에 파일정보와 버킷정보를 넣는다
       s3Client.putObject(new PutObjectRequest(bucket, UUID.randomUUID()+"_"+fileName, file.getInputStream(), null).withCannedAcl(CannedAccessControlList.PublicRead));

       //만들어진 s3객체를 이전에 입력한 s3 access key 와 secret key를 사용한 정보에 입력하고 나오는 url을 return
       return s3Client.getUrl(bucket, fileName).toString();
    }
}
