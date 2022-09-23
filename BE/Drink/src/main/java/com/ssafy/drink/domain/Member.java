package com.ssafy.drink.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Data
//@Table(name = "Member")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberIndex;

    @NonNull
    private String id;
    @NonNull
    private String password;

    private int birthYear;

    private char gender;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime cratedAt;

}
