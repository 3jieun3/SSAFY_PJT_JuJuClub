# 전체 과정을 하나의 파일로 통합
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
        '달지', '안달아서', '안 달아서', '단맛', '달다', '달아요', '달고', '달콤', '달아서', '달큰', '달달',\
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


# 총 72개 태그
# keys = ['매실', '유자', '귤', '과일', '오미자', '포도', '머루', '레몬', '자두', '멜론', '오렌지', '참외', '딸기', '복분자', '오디',\
#     '누룩향', '솔향', '밤', '꿀향', '땅콩', '옥수수', '감자', '꽃향', '매화', '인삼', '송이향', '요구르트', '오크향',\
#     'with 토닉워터', 'with 고기', 'with 해산물', '온더락',' 하이볼',\
#     '반주', '낮술', '축하주', '식전주', '홈술', '혼술',\
#     '여름', '가을', '겨울',\
#     '선물', '가정용', '파티용', '명절', '연말', '특별한 날', '생일', '여행', '프리미엄', '대통령상', '가성비', '수제', '패키징', '재구매',\
#     '달달함', '부드러움', '진함', '순함',\
#     '가벼움', '묵직함',\
#     '맑음', '청량', '상큼', '깔끔', '시원', '은은', '고소함', '숙성', '드라이', '산미'
#     ]
keys = [i for i in range(1, 73)]    # [1, 2, 3, ..., 72]
words = [['매실'], ['유자'], ['귤', '감귤'], ['과일', '과실'], ['오미자'], ['포도', '거봉'],['머루'],\
    ['레몬'], ['자두'],['멜론', '메론'],['오렌지'],['참외'],['딸기'],['복분자'],['오디'],\
    ['누룩향'],['솔향', '솔 향', '솔잎향'],['밤맛', '밤 맛'],['꿀향', '꿀 향'],['땅콩'],['옥수수'],['감자'],['꽃향'],['매화'],['인삼'],['송이향'],['요쿠르트', '요구르트', '야쿠르트', '야구르트', '요거트'], ['오크'],\
    ['토닉', '토닉워터', '토닉 워터'],['고기'],['해산물'],['온더락', '언더락'],['하이볼'],\
    ['반주'],['낮술'],['축하주'],['식전주'],['홈술', '홈 술'],['혼술'],\
    ['여름'],['가을'],['겨울'],\
    ['선물'],['가족','어머니','아버지','부모님'],['집들이','친구들','지인','파티'],['추석','설날','명절','새해'],['크리스마스','연말'],['특별한날','특별한 날'],['생일','생신'],['캠핑','여행'],['고급','프리미엄'],['대통령상'],['가성비'],['수제'],['디자인','패키지','패키징'],['재구매','재주문'],\
    ['단맛', '달다', '달아요', '달고', '달콤', '달아서', '달큰', '달달'],\
    ['우유', '크리미', '부드러운', '부드럽고', '부드러워서', '부드럽게'],\
    ['진합니다', '진해요', '진하고', '진함', '진한', '진해서', '진하게'],\
    ['순하고', '순해요', '순합니다', '순함', '순한'],\
    ['가벼운', '가볍고', '가벼워서', '가볍습니다', '가벼움', '가벼워요', '라이트'],\
    ['묵직한', '묵직하고', '묵직해서', '묵직합니다', '묵직함', '묵직해요', '걸쭉', '걸죽'],\
    ['맑은', '맑고', '맑아서', '맑습니다', '맑음', '맑아요'],\
    ['청량', '스파클링', '탄산', '톡쏘는', '톡'],['상큼','새콤'],['깔끔','산뜻'],\
    ['시원'],['은은'],['고소', '구수'],['숙성','발효','풍부','풍미'],['드라이'],['산미','신맛']
    ]


# 4. 각 리뷰에서 나온 태그들 중 count 기준 최대 3개만 뽑아서 반환
def making_tag(sentence):
    s_list = sentence.split(', ')       # string -> list
    tags = {key: 0 for key in keys}     # {1: 0, 2: 0, 3: 0, ..., 72: 0}
    # 리뷰에 있는 각 단어가 72개의 mapping list(=words) 중에 어느 하나에 들어있다면
    # 그 mapping list의 인덱스를 key로 가지는 태그의 value에 cnt += 1
    for s in s_list:
        for i in range(len(words)):
            if s in words[i]:
                tags[keys[i]] += 1
    # value 기준으로 dictionary 역순정렬
    sorted_tags = dict(sorted(tags.items(), key=lambda item:item[1], reverse=True))  # type: dict
    # dicitonary 중 세 개의 쌍만 선택
    tag_index = []
    three_tags = dict(itertools.islice(sorted_tags.items(), 3))
    # value가 1 이상이면 list에 넣고 list를 반환한다
    for key, value in three_tags.items():
        if value > 0:
            tag_index.append(key)
    if tag_index:
        return tag_index
    return  # value가 0보다 큰 게 없으면 아무것도 반환하지 않는다


# 5. 술-태그 DB 만들기
def make_tag_db(df):
    # 형태소 분석한 결과에서 필요없는 문자들 제거하기
    df2 = df.withColumn("review", \
        f.regexp_replace("review", "\\[|\\{|\\}|\\]", ""))
    
    # 각 술에 대한 (형태소 분석된)리뷰로 태그 최대 3개 뽑기
    df3 = df2.rdd.map(lambda x:
        (x[0], making_tag(x[1]))
        )
    
    # dataframe으로 변환
    df4 = df3.toDF(["drinkIndex", "tags"])
    df5 = df4.withColumn('tags', f.col('tags').cast('string')).sort("drinkIndex")
    df6 = df5.withColumn("tags", f.regexp_replace("tags", "\\[|\\]", ""))
    
    # 각 술에 대해 여러 행이 나오는 형태로 변환
    df7 = df6.withColumn("tags", f.explode(f.split(f.col('tags'), ', '))).sort("drinkIndex")
    return df7


def main():
    df = make_df()  # dataframe 만들기
    df2 = df.na.drop()    # null인 행 없애기
    
    df3 = review_correct(df2)   # 술 index 기준으로 리뷰를 묶고 형태소 분석
    df4 = make_tag_db(df3)  # 각 술에 대한 태그를 db에 넣을 수 있는 형식으로 만듦
    df4.write.csv('./final_result2')
    # df3.coalesce(1).write.csv('./one_result')   # 한 파일로 저장 (기존: 2개)


if __name__ == "__main__":
    main()