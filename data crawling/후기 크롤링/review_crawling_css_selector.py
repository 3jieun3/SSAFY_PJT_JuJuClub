from selenium import webdriver
from bs4 import BeautifulSoup
from time import sleep
import requests
import random
from datetime import datetime
import pandas as pd
import warnings
warnings.filterwarnings('ignore')


# 전통주명, 인덱스 번호, 도수는 직접 입력 (각자에 맞게 변경)
# 나이, 성별은 무작위 선택
name=['DOK막걸리']  # 전통주명
idx = [4]   # 인덱스 번호(전통주 데이터 기준)
abv = [6]   # 도수
genders = ['m', 'f']    # 성별 m(남성), f(여성)
member_id = 1



# 전통주 후기 사이트 주소 (각자에 맞게 변경)
ns_address="https://smartstore.naver.com/dokbrewery/products/5667723981?NaPm=ct%3Dl7qwahkw%7Cci%3Da60f05556b9809ec1fa9ada1a07ef64536c44668%7Ctr%3Dsls%7Csn%3D3460678%7Chk%3Df9d1316aeec329051ecc2ab9f13e47dfb5acd056"
#xpath (각자에 맞게 변경)
shoppingmall_review="/html/body/div/div/div[3]/div[2]/div[2]/div/div[3]/div[6]/div/div[3]/div[2]/ul"


# 코드 변경 불필요 -----------------------------------------------------------
header = {'User-Agent': ''}
d = webdriver.Chrome('chromedriver.exe') # webdriver = chrome
d.implicitly_wait(3)
d.get(ns_address)
req = requests.get(ns_address,verify=False)
html = req.text 
soup = BeautifulSoup(html, "html.parser")
sleep(2)


#쇼핑몰 리뷰 보기
d.find_element_by_xpath(shoppingmall_review).click()
sleep(2)

element=d.find_element_by_xpath(shoppingmall_review)
d.execute_script("arguments[0].click();", element)
sleep(2)


def add_dataframe(name, idx, abv, dates, weekdays, age, gender, scores, nicknames, reviews, member_id, cnt):  #데이터 프레임에 저장
    #데이터 프레임생성
    df1=pd.DataFrame(columns=['name', 'idx', 'abv', 'date', 'weekday', 'age', 'gender', 'score', 'nickname', 'review', 'member_id'])
    n=1
    if (cnt>0):
        for i in range(0,cnt-1):
            df1.loc[n]=[name, idx, abv, dates[i], weekdays[i], age, gender, scores[i], nicknames[i], reviews[i], member_id] #해당 행에 저장
            i+=1
            n+=1
    else:
        df1.loc[n]=[name, idx, abv, 'null', 'null', age, gender, 'null', 'null', 'null', member_id]
        n+=1    
    return df1


# 리뷰 가져오기
d.find_element_by_xpath(shoppingmall_review).click() #스크롤 건드리면 안됨
name_= name[0]
idx_ = idx[0]
abv_ = abv[0]
member_id_ = member_id

dates = []
weekdays = []
scores = []
nicknames = []
reviews = []
cnt=1   #리뷰index
page=1
# --------------------------------------------------------------------------


while True:
    j=1
    print ("페이지", page ,"\n") 
    sleep(2)
    while True: #한페이지에 20개의 리뷰, 마지막 리뷰에서 error발생
        try:
            gender = random.choice(genders) # 성별
            age = int(random.randrange(20, 70)) # 나이
            age_ = age
            gender_ = gender
            
            date = d.find_element_by_xpath('/html/body/div/div/div[3]/div[2]/div[2]/div/div[3]/div[6]/div/div[3]/div[2]/ul/li['+str(j)+']/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/span').text
            # date = d.find_element_by_css_selector('div._2FmJXrTVEX > span._3QDEeS6NLn').text
            score = d.find_element_by_xpath('/html/body/div/div/div[3]/div[2]/div[2]/div/div[3]/div[6]/div/div[3]/div[2]/ul/li['+str(j)+']/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[1]/em').text
            nickname = d.find_element_by_xpath('/html/body/div/div/div[3]/div[2]/div[2]/div/div[3]/div[6]/div/div[3]/div[2]/ul/li['+str(j)+']/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/strong').text

            top_review = d.find_element_by_css_selector('ul.TsOLil1PRz > li:nth-child('+str(j)+')')
            review = top_review.find_element_by_css_selector('div.YEtwtZFLDz > span._3QDEeS6NLn').text
            
            datetime_date = datetime.strptime(date, '%y.%m.%d.')
            dateDict = {0: '월요일', 1:'화요일', 2:'수요일', 3:'목요일', 4:'금요일', 5:'토요일', 6:'일요일'}
            weekday = dateDict[datetime_date.weekday()]

            dates.append(date)
            weekdays.append(weekday)
            scores.append(score)
            nicknames.append(nickname)
            reviews.append(review)


            if j%2==0: #화면에 2개씩 보이도록 스크롤
                ELEMENT = d.find_element_by_xpath('/html/body/div/div/div[3]/div[2]/div[2]/div/div[3]/div[6]/div/div[3]/div[2]/ul/li['+str(j)+']/div/div/div/div[1]/div/div[1]/div[2]/div/span')
                d.execute_script("arguments[0].scrollIntoView(true);", ELEMENT)       
            j+=1
            print(cnt, abv_, date, weekday, age, gender, score, nickname, review, member_id_, "\n")
            cnt+=1 
        except: break
            
    sleep(2)

    page_list = d.find_elements_by_css_selector("#REVIEW > div > div._180GG7_7yx > div.cv6id6JEkg > div > div > a")

    try:
        for i in range(len(page_list)):
            if page_list[i].text == f'{page + 1}':
                page_list[i].click()
                break
        page += 1
    except:
        break


    
    # if page < 11:   #page10
    #     try:        # 리뷰의 마지막 페이지에서 error발생
    #         page +=1
    #         next_page=d.find_element_by_xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[6]/div[3]/a['+str(page)+']').click() 
            
    #     except: break #리뷰의 마지막 페이지에서 process 종료
        
    # else : 
    #     try:    # page11부터
    #         page+=1
    #         if page%10==0: next_page=d.find_element_by_xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[6]/div[3]/a[11]').click()
    #         else : next_page=d.find_element_by_xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[6]/div[3]/a['+str(page%10+2)+']').click()
            
    #     except: break


df4=add_dataframe(name_, idx_, abv_, dates, weekdays, age_, gender_, scores, nicknames, reviews, member_id_, cnt)

df4.to_csv('./reviews.csv', encoding='utf-8-sig', mode='a')