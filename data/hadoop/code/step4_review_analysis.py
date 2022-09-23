# step4: drinkIndex 기준으로 리뷰를 묶고 형태소 분석
import findspark
findspark.init()
from pyspark.sql import SparkSession
from pyspark.sql.types import StructType, StructField, StringType, LongType, DateType, IntegerType
import pyspark.sql.functions as f

import re
from ckonlpy.tag import Twitter, Postprocessor
import itertools


# 1. 입력 dataframe 생성(drinkIndex 기준으로 리뷰 묶음)
def make_df():
    PATH = './data/S07P22D106/data/0922.csv'

    # sqoop에서 온 데이터 + 컬럼명 추가하기
    schema = StructType([
        StructField("reviewIndex", LongType(), True),   # index: [0]
        StructField("memberIndex", LongType(), True),
        StructField("drinkIndex", LongType(), True),
        StructField("createdAt", DateType(), True),
        StructField("updatedAt", DateType(), True),
        StructField("weekday", StringType(), True),
        StructField("memberId", StringType(), True),
        StructField("age", IntegerType(), True),
        StructField("gender", StringType(), True),
        StructField("score", IntegerType(), True),
        StructField("review", StringType(), True),  # index: [10]
        StructField("isCrawled", IntegerType(), True)
    ])

    # 컬럼명 추가한 초기 데이터
    spark = SparkSession.builder\
        .master('local[*]')\
        .appName('SparkSQL')\
        .getOrCreate()
    spark.sparkContext.setLogLevel("ERROR")
    df = spark.read.csv(PATH, schema=schema)
    df2 = df.groupBy(f.col("drinkIndex"))\
        .agg(f.concat_ws(" ", f.collect_list(f.col("review"))).alias("reviews"))\
        .sort("drinkIndex")
    return df2


# 2. 형태소 분석기
def check_correct(text):
    twitter = Twitter()
    
    # customizing dictionary
    twitter.add_dictionary([\
        '귤', '감귤', '과일', '과실', '포도', '거봉', '자두', '멜론', '메론',\
        '누룩향', '솔향', '솔 향', '솔잎향', '밤맛', '밤 맛', '꿀향', '꿀 향', '땅콩', '꽃향', '송이향', '요쿠르트', '요구르트', '야쿠르트', '야구르트', '요거트', '오크',\
        '토닉', '토닉워터', '토닉 워터', '고기', '해산물', '온더락', '언더락', '하이볼',\
        '반주', '낮술', '축하주', '식전주', '홈술', '홈 술', '혼술',\
        '선물', '가족', '어머니', '아버지', '부모님', '집들이', '친구들', '지인', '파티', '추석', '설날', '명절', '새해', '크리스마스', '연말', '특별한날', '특별한 날', '생일', '생신', '캠핑', '여행', '고급', '프리미엄', '대통령상', '가성비', '수제', '디자인', '패키지', '패키징', '재구매', '재주문',\
        '달지', '안달아서', '안 달아서', '단맛', '달다', '달아요', '달고', '달콤', '달아서', '달큰',\
        '우유', '크리미', '안 부드', '부드럽지', '부드러운', '부드럽고', '부드러워서', '부드럽게',\
        '안 진합니다', '안진합니다', '안 진해요', '안진해요', '안 진하고', '안진하고', '안 진함', '안진함', '안 진한', '안진한', '진합니다', '진해요', '진하고', '진함', '진한', '진해서', '진하게',\
        '순하고', '순해요', '순합니다', '순함', '순한',\
        '가벼운', '가볍고', '가벼워서', '가볍습니다', '가벼움', '가벼워요', '라이트',\
        '묵직한', '묵직하고', '묵직해서', '묵직합니다', '묵직함', '묵직해요', '걸쭉', '걸죽',\
        '맑은', '맑고', '맑아서', '맑습니다', '맑음', '맑아요',\
        '청량', '스파클링', '탄산', '톡쏘는', '톡',\
        '상큼', '새콤', '깔끔', '산뜻', '시원', '은은', '고소', '구수',\
        '숙성', '발효', '풍부', '풍미', '드라이', '산미', '신맛'
        ], 'Noun')
    # not use words
    stopwords = {\
        '은', '는', '이', '가', \
        '달지', '안달아서', '안 달아서', \
        '안 부드', '부드럽지', '안 진합니다', '안진합니다', '안 진해요', '안진해요', '안 진하고', '안진하고', '안 진함', '안진함', '안 진한', '안진한',\
        }
        
    postprocessor = Postprocessor(twitter, stopwords=stopwords)
    text.replace("\n", " ").replace("\t", " ")     # 개행문자 제거
    pattern_punctuation = re.compile(r'[^\w\s]')    # 정규표현식(특수문자 제거)
    text = pattern_punctuation.sub('', text)
    result = postprocessor.pos(text)
    return result


# 3. 각 리뷰마다 형태소 분석하기
def review_correct(dataframe):
    df = dataframe.rdd.map(lambda x:     # 각 행마다 리뷰 내용 형태소 분석하기
        (x[0], check_correct(x[1]))
        )
    df2 = df.toDF(["drinkIndex", "review"])    # rdd -> dataframe 변환
    df3 = df2.withColumn('review', f.col('review').cast('string'))  # csv에 array를 저장하지 못하므로 string type으로 변경
    return df3


def main():
    df = make_df()  # dataframe 만들기
    df2 = df.na.drop()    # null인 행 없애기
    
    df3 = review_correct(df2)   # 술 index 기준으로 리뷰를 묶고 형태소 분석
    df3.coalesce(1).write.csv('./one_result')   # 한 파일로 저장 (기존: 2개)


if __name__ == "__main__":
    main()