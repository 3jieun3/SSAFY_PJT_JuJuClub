# step5: 각 술에 대해 형태소 분석된 review를 가지고 tag db 처리
import findspark
findspark.init()
from pyspark.sql import SparkSession
from pyspark.sql.types import StructType, StructField, StringType, LongType
import pyspark.sql.functions as f
import itertools


# 입력 dataframe 생성
def make_df():
    PATH = 'one_result/part-00000-d046fa25-cc5d-49ea-9675-c0cb9c0022af-c000.csv'
    schema = StructType([
        StructField("drinkIndex", LongType(), True),   # index: [0]
        StructField("review", StringType(), True)
    ])
    spark = SparkSession.builder\
        .master('local[*]')\
        .appName('SparkSQL')\
        .getOrCreate()
    spark.sparkContext.setLogLevel("ERROR")
    df = spark.read.csv(PATH, schema=schema)
    return df


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
keys = [i for i in range(1, 73)]
words = [['매실'], ['유자'], ['귤', '감귤'], ['과일', '과실'], ['오미자'], ['포도', '거봉'],['머루'],\
    ['레몬'], ['자두'],['멜론', '메론'],['오렌지'],['참외'],['딸기'],['복분자'],['오디'],\
    ['누룩향'],['솔향', '솔 향', '솔잎향'],['밤맛', '밤 맛'],['꿀향', '꿀 향'],['땅콩'],['옥수수'],['감자'],['꽃향'],['매화'],['인삼'],['송이향'],['요쿠르트', '요구르트', '야쿠르트', '야구르트', '요거트'], ['오크'],\
    ['토닉', '토닉워터', '토닉 워터'],['고기'],['해산물'],['온더락', '언더락'],['하이볼'],\
    ['반주'],['낮술'],['축하주'],['식전주'],['홈술', '홈 술'],['혼술'],\
    ['여름'],['가을'],['겨울'],\
    ['선물'],['가족','어머니','아버지','부모님'],['집들이','친구들','지인','파티'],['추석','설날','명절','새해'],['크리스마스','연말'],['특별한날','특별한 날'],['생일','생신'],['캠핑','여행'],['고급','프리미엄'],['대통령상'],['가성비'],['수제'],['디자인','패키지','패키징'],['재구매','재주문'],\
    ['단맛', '달다', '달아요', '달고', '달콤', '달아서', '달큰'],\
    ['우유', '크리미', '부드러운', '부드럽고', '부드러워서', '부드럽게'],\
    ['진합니다', '진해요', '진하고', '진함', '진한', '진해서', '진하게'],\
    ['순하고', '순해요', '순합니다', '순함', '순한'],\
    ['가벼운', '가볍고', '가벼워서', '가볍습니다', '가벼움', '가벼워요', '라이트'],\
    ['묵직한', '묵직하고', '묵직해서', '묵직합니다', '묵직함', '묵직해요', '걸쭉', '걸죽'],\
    ['맑은', '맑고', '맑아서', '맑습니다', '맑음', '맑아요'],\
    ['청량', '스파클링', '탄산', '톡쏘는', '톡'],['상큼','새콤'],['깔끔','산뜻'],\
    ['시원'],['은은'],['고소', '구수'],['숙성','발효','풍부','풍미'],['드라이'],['산미','신맛']
    ]
tags = {key: 0 for key in keys}


def counting(sentence):
    a = sentence.split(', ')
    tags = {key: 0 for key in keys}
    for s in a:
        for i in range(len(words)):
            if s in words[i]:
                tags[keys[i]] += 1
    sorted_tags = dict(sorted(tags.items(), key=lambda item:item[1], reverse=True))  # type: dict
    tag_index = []
    three_tags = dict(itertools.islice(sorted_tags.items(), 3))
    for key, value in three_tags.items():
        if value > 0:
            tag_index.append(key)
    if tag_index:
        return tag_index
    return


def main():
    df = make_df()  # dataframe 만들기
    df2 = df.withColumn("review", \
        f.regexp_replace("review", "\\[|\\{|\\}|\\]", ""))
    df3 = df2.rdd.map(lambda x:
        (x[0], counting(x[1]))
        )
    df4 = df3.toDF(["drinkIndex", "tags"])
    df5 = df4.withColumn('tags', f.col('tags').cast('string')).sort("drinkIndex")
    df6 = df5.withColumn("tags", \
        f.regexp_replace("tags", "\\[|\\]", ""))
    df7 = df6
    df8 = df7.withColumn("tags", f.explode(f.split(f.col('tags'), ', ')))\
        .sort("drinkIndex")
    df8.write.csv('./sort_result3')


if __name__ == "__main__":
    main()