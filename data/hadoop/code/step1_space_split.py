# step1: 전통주 리뷰 전체에서 tag에 사용할 단어 고르기
import findspark
findspark.init()
from pyspark.sql import SparkSession
from pyspark.sql.types import StructType, StructField, StringType, LongType, DateType, IntegerType
import pyspark.sql.functions as f
from pyspark.sql import SparkSession


def make_df():
    PATH = './S07P22D106/data/testutf8.csv'

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
    return df


if __name__ == "__main__":
    df = make_df()
    # " "를 기준으로 리뷰 분리하고 word count
    df2 = df.withColumn('word', f.explode(f.split(f.col('review'), ' '))) \
        .groupBy('word') \
        .count() \
        .sort('count', ascending=False)
    df2.write.csv('./space_split')
