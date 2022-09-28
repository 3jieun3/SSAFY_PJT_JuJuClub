package com.ssafy.drink.repository;

import com.ssafy.drink.domain.Tag;
import com.ssafy.drink.domain.TagDrink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {
    @Query(value = "select drinkIndex from TagDrink where tagIndex = :tagIndex group by drinkIndex",nativeQuery = true)
    public List<Long> findByTagIndexDrinkIndex(@Param("tagIndex") int tagIndex);
}
