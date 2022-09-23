# 빅데이터 분산처리

> Hadoop, Spark, Sqoop

[TOC]

## Big Data 처리 과정

- [x] step1: 전체 리뷰를 " "(space) 기준으로 split해서 단어를 분리하고 같은 것끼리 묶은 다음 csv로 추출
  * step1_space_split.py
- [x] step2: csv에서 태그에 쓸 만한 단어 고르기(형태소 분석에서 add_dictionary, stopwords에 쓸 것들)
- [x] step3: 팀원들과 함께 전통주 태그에 넣을 단어를 정리, 프론트엔드 필터에 사용할 태그 고르기
  * S07P22D106/data/hadoop/data/tag table for hadoop.csv
  * tag filtering for frontend.md
- [x] step4: drinkIndex 기준으로 리뷰를 묶고 각 술에 대해서 리뷰(모음) 형태소 분석한 결과를 csv로 추출
  * step4_review_analysis.py
- [x] step5: step4에서 추출된 csv에서 각 술에 대해 모든 태그를 카운팅하고 db에 넣을 수 있도록 바꾼 후 csv 추출
  * step5_review_count.py
- [x] step6: 모든 코드를 하나로 합치기
  * **step6_final_code.py**
- [ ] step7: sqoop를 통해 DB로 옮기기

<br>

## 반복할 처리 과정

> 정해진 시각마다 Hadoop을 돌려서 각 술에 대한 태그를 update 한다.

1. review 데이터를 sqoop을 통해 DB에서 HDFS로 옮긴다.

2. step6_final_code.py에 있는 **PATH** 경로를 HDFS에 있는 review 데이터 경로로 바꿔준다.

3. step6_final_code.py에 있는 **main** 함수에서 결과 파일이 저장될 경로를 HDFS로 바꿔준다.

4. ```python
   python3 step6_final_code.py
   ```

5. HDFS에 저장된 결과 파일을 sqoop을 통해 DB로 옮긴다.

<br>

---

## 폴더 구조

### 1. code

* (no use)all_reviews_check.py: 리뷰 전체에 대해서 형태소 분석하는 코드 (사용하지 않음)
* step1_space.split.py
* step4_review_analysis.py
* step5_review_tagging.py
* step6_final_code.py



### 2. data

* testutf8.csv: step1_space_split.py에서 사용한 csv
* tag table for hadoop.csv
  * tagIndex, tagName, stopwords, add_dictionary, mappingList
  * hadoop 처리를 위해 정리한 테이블로, 각 태그에 대해 <u>형태소 분석을 위해 필요한 stopwords, add_dictionary 정보</u>와 <u>태그 개수를 셀 때 필요한 mappingList 정보</u>가 들어있다.
* tag filtering for frontend.md: 프론트엔드에서 전통주를 필터링할 때 사용할 태그들을 정리해둔 파일