package com.ssafy.drink.repository;

import com.ssafy.drink.domain.DrinkType;
import com.ssafy.drink.domain.Weather;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WeatherRepository extends JpaRepository<Weather, Long> {
    Weather findByWeatherStatus(String weather);
}
