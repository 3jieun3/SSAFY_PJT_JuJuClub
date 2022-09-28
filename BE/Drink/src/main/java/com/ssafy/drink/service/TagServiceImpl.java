package com.ssafy.drink.service;

import com.ssafy.drink.domain.Tag;
import com.ssafy.drink.dto.ResponseTag;
import com.ssafy.drink.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TagServiceImpl implements  TagService {

    @Autowired
    TagRepository tagRepository;


    @Override
    public Map<String, Object> retrieveTags() {
        String[] customTag = {"과일", "밤", "땅콩", "꽃향", "인삼", "송이향", "오크향", "온더락", "하이볼",
                                "반주", "축하주", "홈술", "혼술", "대통령상", "선물", "가정용", "파티용", "명절",
                                "연말", "생일", "여행", "가성비", "수제", "부드러움", "청량", "상큼", "깔끔", "고소함", "드라이" };

        List<ResponseTag> responseTags = new ArrayList<>();

        for(int i = 0; i < customTag.length; i++) {
            responseTags.add(new ResponseTag(customTag[i], false));
        }

        Map<String, Object> map = new HashMap<>();
        map.put("taglist", responseTags);

        return map;
    }
}
