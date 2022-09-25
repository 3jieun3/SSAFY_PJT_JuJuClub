package com.ssafy.drink.repository;

import com.ssafy.drink.domain.TodayWeather;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodayWeatherRepository extends JpaRepository<TodayWeather,Long> {
}
