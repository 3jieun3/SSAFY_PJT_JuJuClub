package com.ssafy.drink.service;

import com.ssafy.drink.domain.Drink;
import com.ssafy.drink.domain.TagDrink;
import com.ssafy.drink.domain.Weather;
import com.ssafy.drink.mapping.ResponseTodayDrink;
import com.ssafy.drink.repository.DrinkRepository;
import com.ssafy.drink.repository.ReviewRepository;
import com.ssafy.drink.repository.TagDrinkRepository;
import com.ssafy.drink.repository.WeatherRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MainServiceImpl implements MainService{

    private static final Logger logger = LoggerFactory.getLogger(MainServiceImpl.class);

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    DrinkRepository drinkRepository;

    @Autowired
    WeatherRepository weatherRepository;

    @Autowired
    TagDrinkRepository tagDrinkRepository;

    @Override
    public Map<String, Object> todayDrink() {

        // 현재 요일 구하기
        String[] dayOfWeek = {"일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"};
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        int dayOfWeekNum = calendar.get(Calendar.DAY_OF_WEEK); // 1~7 : 일요일~토요일
        String today = dayOfWeek[dayOfWeekNum - 1];

        List<ResponseTodayDrink> responseTodayDrink = reviewRepository.getTodayDrink(today); // 현재 요일에 가장 많이 먹은 술 정보(drinkIndex, count, weekday)
        Long todayTotalReviewCount = reviewRepository.getTodayTotalReviewCount(today); // 현재 요일에 작성된 글 전체 개수

        Drink drink = drinkRepository.findById(responseTodayDrink.get(0).getDrinkIndex()).orElseThrow(RuntimeException::new);

        List<String> tags = new ArrayList<>();

        List<TagDrink> tagList = tagDrinkRepository.findByDrink(drink);
        for(int j = 0; j < tagList.size(); j++) {
            tags.add(tagList.get(j).getTag().getTagName());
        }
        Map<String, Object> map = new HashMap<>();
        map.put("drink", drink);
        map.put("weekday", responseTodayDrink.get(0).getWeekday());
        int percent = (int) ((double)responseTodayDrink.get(0).getCount() / (double)todayTotalReviewCount * 100);
        map.put("percent", percent);
        map.put("tag", tags);

        return map;
    }

    @Override
    public Map<String, Object> weatherDrink(String weatherStatus) {
        String[] atmosphere = {"Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Dust", "Ash", "Squall", "Tornado"};
        for(String value : atmosphere) {
            if(weatherStatus.equals(value)) {
                weatherStatus = "Atmosphere";
                break;
            }
        }
        Weather weather = weatherRepository.findByWeatherStatus(weatherStatus); // 오늘 날씨에 어울리는 주종
        List<Drink> drinks = drinkRepository.findByDrinkType(weather.getDrinkType()); // 주종에 해당하는 술 리스트

        Random rand = new Random();
        int number = rand.nextInt(drinks.size()); // 랜덤 숫자
        Drink drink = drinks.get(number);

        List<String> tags = new ArrayList<>();

        List<TagDrink> tagList = tagDrinkRepository.findByDrink(drink);
        for(int j = 0; j < tagList.size(); j++) {
            tags.add(tagList.get(j).getTag().getTagName());
        }

        HashMap<String, Object> map = new HashMap<>();
        map.put("drink", drink);
        map.put("weather", weather.getWeatherStatus());
        map.put("tag", tags);

        return map;
    }
}
