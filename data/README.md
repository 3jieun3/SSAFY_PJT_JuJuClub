# Big Data

[TOC]

<br>

## data_crawling

1. 결과 데이터

   * drink_type.csv
     * drinkIndex, drinkName, drinkType, ingredient, abv, volume, description, imageURL
     * **전통주 크롤링**을 통해 얻은 술 정보로, 630개가 들어있다.
     * 데이터 정제가 되지 않은 상태이다.
   * 전통주 리스트.csv
     * drinkIndex, drinkName, drinkType, ingredient, abv, volume, description, imageURL
     * **후기 크롤링**을 하는 과정에서 업데이트 된 전통주 리스트이다.
     * 634개가 들어있다.
   * 전통주 현황.csv
     * 634개의 전통주 중 후기가 있는 술과 도수를 분리시킨 술, 자료가 없어 삭제한 술 등이 표시되어 있다.

   * 후기 리스트.csv
     * reviewIndex, drinkName, drinkIndex, abv, date, weekday, age, gender, score, nickname, review, memberId
       * 634개의 전통주 중 후기가 있는 술에 대해서 리뷰 크롤링한 결과이다.
       * 총 182,853개의 후기가 크롤링 되었다.

2. 전통주 크롤링
   1. drink_type.py: '더 술' 사이트에서 주종을 알 수 있도록 크롤링하는 코드이다.
   2. drinks.py: '더 술' 사이트의 전체 술 목록 페이지에서 크롤링하는 코드이며, 주종을 가져올 수 없다.

3. 후기 크롤링
   1. review_crawling_css_selector.py:  https://smartstore.naver.com/ 형식의 사이트에서 css_selector를 활용해 후기 크롤링하는 코드
   2. review_crawling_search.py:  https://search.shopping.naver.com/ 형식의 사이트에서 xpath를 활용해 후기 크롤링하는 코드
   3. review_crawling_xpath.py: https://smartstore.naver.com/ 형식의 사이트에서 xpath를 활용해 후기 크롤링하는 코드

4. drink data problem.md: 후기를 크롤링하는 코드를 작성하며 나왔던 문제들을 기록해둔 파일

5. README: 데이터 크롤링 시작 방법과 참고할 수 있는 예시

<br>

## database

> ERD에 맞게 DB에 넣을 수 있도록 정제한 csv

* drink_food_match.csv
  * drinkType, foodIndex
  * 주종-음식 매핑 테이블
* drink_list.csv
  * drinkIndex, drinkName, drinkTypeIndex, abv, ingredient, volume, description, imageUrl
  * 총 637개의 전통주 정보
* drink_type.csv
  * drinkTypeIndex, drinkType
  * 주종 테이블, 총 5개의 주종
* koreanfood_list.csv
  * foodIndex, foodName, imageUrl
  * 음식 테이블
* review_list.csv
  * reviewIndex, memberIndex, drinkIndex, createdAt, updatedAt, weekday, memberId, age, gender, score, review, isCrawled
  * 전체 리뷰 테이블
  * 초기: 총 182,853개의 리뷰 존재
  * 계속해서 업데이트 되고 hadoop에서 데이터 처리할 때 사용될 예정
* tag_list.csv
  * tagIndex, tagName
  * 분류작업한 단어들로 tag 테이블 작성
  * 현재 72개의 tag 존재

<br>

## food_data

* 데이터 분석신청 자료.xlsx
  * 레시피이름, 유형분류, 칼로리, 분량, 조리시간, 재료명, 재료용량, 재료타입명
  * 출처: 농림축산식품 공공데이터 포털 api 요청 (레시피 기본정보, 레시피 과정정보, 레시피 재료정보)
  * 5,923개의 음식 데이터
* Result.xlsx
  * name, type, ingredients
  * 농림축산식품 공공데이터 포털에서 받은 데이터 분석신청 자료에서 한식과 퓨전음식만 고른다.
  * 레시피이름을 기준으로 재료명을 모두 모은다(group by, concat by mysql).

<br>

## hadoop

* Hadoop과 Spark를 활용해 빅데이터 분산처리를 하는 과정에 대해 정리해둔 폴더
* 코드와 활용한 데이터, Spark 사전학습 가이드, README 파일이 있다.
