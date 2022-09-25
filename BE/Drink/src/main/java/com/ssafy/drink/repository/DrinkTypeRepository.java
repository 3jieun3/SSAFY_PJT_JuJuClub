package com.ssafy.drink.repository;

import com.ssafy.drink.domain.DrinkType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DrinkTypeRepository extends JpaRepository<DrinkType, Long> {
}
