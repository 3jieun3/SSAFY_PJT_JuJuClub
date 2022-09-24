package com.ssafy.drink.dto;

import com.ssafy.drink.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class RegistMember {
    private String id;
    private String password;
    private int birthYear;
    private char gender;



    public Member toEntity(){

        return Member.builder()
             .id(id)
             .password(password)
             .birthYear(birthYear)
             .gender(gender)
             .createdAt(LocalDateTime.now())
             .build();
    }
}
