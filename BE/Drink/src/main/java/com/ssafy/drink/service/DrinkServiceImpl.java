package com.ssafy.drink.service;

import com.ssafy.drink.domain.*;
import com.ssafy.drink.dto.ResponseDrinkTag;
import com.ssafy.drink.dto.SelectedTags;
import com.ssafy.drink.mapping.ReviewMapping;
import com.ssafy.drink.repository.DrinkRepository;
import com.ssafy.drink.repository.FoodDrinkTypeRepository;
import com.ssafy.drink.repository.ReviewRepository;
import com.ssafy.drink.repository.TagDrinkRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class DrinkServiceImpl implements DrinkService{

    public static final Logger logger = LoggerFactory.getLogger(DrinkServiceImpl.class);



    @Autowired
    DrinkRepository drinkRepository;

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    TagDrinkRepository tagDrinkRepository;

    @Autowired
    FoodDrinkTypeRepository foodDrinkTypeRepository;

    @Override
    public List<ResponseDrinkTag> retrieveDrinks() {
        List<Drink> drinks = drinkRepository.findAll();
        List<ResponseDrinkTag> drinkTags = new ArrayList<>();

        for(int i = 0; i < drinks.size(); i++) {
            Drink drink = drinks.get(i);
            List<String> tags = new ArrayList<>();

            List<TagDrink> tagList = tagDrinkRepository.findByDrink(drink);
            for(int j = 0; j < tagList.size(); j++) {
                tags.add(tagList.get(j).getTag().getTagName());
            }
            drinkTags.add(new ResponseDrinkTag(drink, tags));
        }

        return drinkTags;
    }

    @Override
    public Map<String, Object> retrieveDrinkInfo(Long drinkIndex) {


        Drink drink = drinkRepository.findById(drinkIndex).orElseThrow(RuntimeException::new); // 술 상세정보
        List<ReviewMapping> reviewList = reviewRepository.findByDrink(drink);
        List<FoodDrinkType> foodDrinkList = foodDrinkTypeRepository.findByDrinkType(drink.getDrinkType());
        List<String> tags = new ArrayList<>();

        List<TagDrink> tagList = tagDrinkRepository.findByDrink(drink);
        for(int j = 0; j < tagList.size(); j++) {
            tags.add(tagList.get(j).getTag().getTagName());
        }

        int numbers[] = new int[3];
        Random rand = new Random();
        for(int i = 0; i < numbers.length; i++) {
            numbers[i] = rand.nextInt(foodDrinkList.size());

            for(int j = 0; j < i; j++) {
                if(numbers[i] == numbers[j]) {
                    i--;
                }
            }
        }

        logger.info(Arrays.toString(numbers));

        List<Food> foodList = new ArrayList<>();
        for(int i = 0; i < numbers.length; i++) {
            foodList.add(foodDrinkList.get(numbers[i]).getFood());
        }

        Map<String, Object> map = new HashMap<>();
        map.put("drink", drink);
        map.put("reviews", reviewList);
        map.put("foods", foodList);
        map.put("tags", tags);

        return map;

    }

    @Override
    public List<String> retrieveDrinkName() {
        List<Drink> drinkList = drinkRepository.findAll();

        List<String> drinkNameList = new ArrayList<>();
        for(int i = 0; i < drinkList.size(); i++) {
            drinkNameList.add(drinkList.get(i).getDrinkName());
        }

        return drinkNameList;
    }

    @Override
    public Map<String, Object> searchByTags(SelectedTags selectedTags) {
        List<Drink> drinks = drinkRepository.findAll();
        List<ResponseDrinkTag> drinkTags = new ArrayList<>();
        List<String> searchTags = new ArrayList<>();


        for(int i = 0; i < drinks.size(); i++) {
            Drink drink = drinks.get(i);
            List<String> tags = new ArrayList<>();

            List<TagDrink> tagList = tagDrinkRepository.findByDrink(drink);
            for(int j = 0; j < tagList.size(); j++) {
                tags.add(tagList.get(j).getTag().getTagName());
                Collections.sort(tags);
            }
            drinkTags.add(new ResponseDrinkTag(drink, tags));
        }

        // 주종 ===============================================================================================
        if(selectedTags.getDrinkType() != null) { // drinkType 일치 검색
            List<ResponseDrinkTag> result = new ArrayList<>();
            for(int i = 0; i < drinkTags.size(); i++) {
                Long drinkType = drinkTags.get(i).getDrink().getDrinkType().getDrinkTypeIndex();
                if(drinkType == selectedTags.getDrinkType()) {
                    result.add(drinkTags.get(i));
                }
            }
            drinkTags = result;
        }
        // 도수 ===============================================================================================
        if(selectedTags.getStartAbv() != 0 && selectedTags.getEndAbv() != 0) {
            double start = 0; double end = 0;

            start = selectedTags.getStartAbv();
            end = selectedTags.getEndAbv();

            List<ResponseDrinkTag> result = new ArrayList<>();
            for(int i = 0; i < drinkTags.size(); i++) {
                double abv = drinkTags.get(i).getDrink().getAbv() * 100;
                System.out.println(drinkTags.get(i).getDrink().getAbv() * 100);

                if(start <= abv && abv < end) {
                    result.add(drinkTags.get(i));
                }
            }
            drinkTags = result;
        }
        // 산미 ===============================================================================================
        if(selectedTags.getAcidity() != null) {
            if(selectedTags.getAcidity().equals("yes")) { // 산미 있음
                searchTags.add("산미");
            }
        }
        // 당도 ===============================================================================================
        if(selectedTags.getSweetness() != null) {
            if(selectedTags.getSweetness().equals("yes")) { // 당도 있음
                searchTags.add("달달함");
            }
        }
        // 과일 ===============================================================================================
        if(selectedTags.getFruit() != null) {
            searchTags.add(selectedTags.getFruit());
        }
        // 바디감 ===============================================================================================
        if(selectedTags.getBody() != null) {
            searchTags.add(selectedTags.getBody());
        }

        // 리뷰기반태그 ===============================================================================================
        if(selectedTags.getTags() != null) {
            searchTags.addAll(selectedTags.getTags());
        }

        Collections.sort(searchTags);
        List<TagCount> tagCountList = new ArrayList<>();
        if(!searchTags.isEmpty()) {
            List<ResponseDrinkTag> result = new ArrayList<>();
            for(int i = 0; i < drinkTags.size(); i++) {
                if(drinkTags.get(i).getTags().size() == 0) continue; // 태그가 없는 술은 태그 검색에서 제외

                int count = 0;
                for(int j = 0; j < searchTags.size(); j++) {
                    if(drinkTags.get(i).getTags().contains(searchTags.get(j))) {
                        count++;
                    }
                }
                if(count != 0) {
                    tagCountList.add(new TagCount(i, count));
                }
            }
            Collections.sort(tagCountList, new MyComparator()); // 선택 태그들 중 가장 많은 태그를 갖고 있는 술 내림차순 정렬
            for(int i = 0; i < tagCountList.size(); i++) {
                result.add(drinkTags.get(tagCountList.get(i).drinkIndex));
            }
            drinkTags = result;
        }
        Map<String, Object> map = new HashMap<>();
        map.put("drinks", drinkTags);
        return map;
    }

    private static class TagCount {
        int drinkIndex;
        int count;

        public TagCount(int drinkIndex, int count) {
            this.drinkIndex = drinkIndex;
            this.count = count;
        }

    }

    private static class MyComparator implements Comparator<TagCount> {

        @Override
        public int compare(TagCount o1, TagCount o2) {
            return -(o1.count - o2.count);
        }
    }

}
