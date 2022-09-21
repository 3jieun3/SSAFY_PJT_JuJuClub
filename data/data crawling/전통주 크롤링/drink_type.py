from selenium import webdriver
from bs4 import BeautifulSoup
from time import sleep
import requests
import pandas as pd
import warnings
warnings.filterwarnings('ignore')


# '더 술' 전통주 정보
for num in range(1, 6):
    drink_type = ['탁주', '약주, 청주', '과실주', '증류주', '리큐르, 기타주류']
    type = drink_type[num-1]
    ns_address = "https://thesool.com/front/find/M00000008"+str(num+2)+"/list.do?kind=CD0000014"+ str(num)
    #xpath
    drinks = "/html/body/div/div[2]/div[3]/div/div/div[2]/div/div[1]/ul"

    header = {'User-Agent': ''}
    d = webdriver.Chrome('chromedriver.exe') # webdriver = chrome
    d.implicitly_wait(3)
    d.get(ns_address)
    req = requests.get(ns_address,verify=False)
    html = req.text 
    soup = BeautifulSoup(html, "html.parser")
    sleep(2)


    #술 정보 보기
    d.find_element_by_xpath(drinks).click()
    sleep(2)

    element=d.find_element_by_xpath(drinks)
    d.execute_script("arguments[0].click();", element)
    sleep(2)


    def add_dataframe(names, type, ingredients, abvs, volumes, descriptions, imageURLs, cnt):  #데이터 프레임에 저장
        #데이터 프레임생성
        df1=pd.DataFrame(columns=['name', 'type', 'ingredient','abv','volume', 'description', 'imageURL'])  # 전통주명, 주원료, 도수, 규격, 제품특징, 이미지url
        n=1
        if (cnt > 0):
            for i in range(0, cnt-1):
                df1.loc[n]=[names[i], type, ingredients[i], abvs[i], volumes[i], descriptions[i], imageURLs[i]] #해당 행에 저장
                i+=1
                n+=1
        else:
            df1.loc[n]=['null', type, 'null', 'null', 'null', 'null','null']
            n+=1    
        return df1


    # 술 정보 가져오기
    d.find_element_by_xpath(drinks).click() #스크롤 건드리면 안됨
    names=[]
    type_=type
    ingredients=[]
    abvs=[]
    volumes=[]
    descriptions=[]
    imageURLs=[]
    cnt=1   #술 index
    page=1

    
    while True:
        j=1
        print ("페이지", page ,"\n") 
        sleep(2)
        while True: #한페이지에 20개의 리뷰, 마지막 리뷰에서 error발생
            try:
                name = d.find_element_by_xpath('/html/body/div/div[2]/div[3]/div/div/div[2]/div/div[1]/ul/li['+str(j)+']/dl/dt/div[1]/div').text
                ingredient = d.find_element_by_xpath('/html/body/div/div[2]/div[3]/div/div/div[2]/div/div[1]/ul/li['+str(j)+']/dl/dd/ul/li[2]/div[2]').text
                volume, abv = d.find_element_by_xpath('/html/body/div/div[2]/div[3]/div/div/div[2]/div/div[1]/ul/li['+str(j)+']/dl/dd/ul/li[3]/div[2]').text.replace(" ", "").split('/')
                description = d.find_element_by_xpath('/html/body/div/div[2]/div[3]/div/div/div[2]/div/div[1]/ul/li['+str(j)+']/dl/dd/ul/li[4]/div[2]/span').text
                imageURL = d.find_element_by_xpath('/html/body/div/div[2]/div[3]/div/div/div[2]/div/div[1]/ul/li['+str(j)+']/div/div/span/img').get_attribute('src')
                
                names.append(name)
                ingredients.append(ingredient)
                abvs.append(abv)
                volumes.append(volume)
                descriptions.append(description)
                imageURLs.append(imageURL)


                if j%11==0: #화면에 2개씩 보이도록 스크롤
                    ELEMENT = d.find_element_by_xpath('/html/body/div/div[2]/div[3]/div/div/div[2]/div/div[1]/ul/li['+str(j)+']/dl/dd/ul/li[4]/div[2]/span')
                    d.execute_script("arguments[0].scrollIntoView(true);", ELEMENT)       
                j+=1
                print(cnt, name, type_, ingredient, abv, volume, description, imageURL, "\n")
                cnt+=1
            except: break

        sleep(2)

        if page<6:    #page5
            try: #리뷰의 마지막 페이지에서 error발생
                page +=1
                next_page=d.find_element_by_xpath('/html/body/div/div[2]/div[3]/div/div/div[2]/div/div[2]/ul/li['+str(page+1)+']/a').click() 
            except: break #리뷰의 마지막 페이지에서 process 종료
            
        else : 
            try: #page6부터
                page+=1
                if page%5==1:   # 6, 11, 16 page...
                    next_page=d.find_element_by_xpath('/html/body/div/div[2]/div[3]/div/div/div[2]/div/div[2]/ul/li[7]/a').click()
                else:
                    if (page+1)%5 < 2: # (9, 10), (14, 15), (19, 20)page...
                        next_page=d.find_element_by_xpath('/html/body/div/div[2]/div[3]/div/div/div[2]/div/div[2]/ul/li['+str((page+1)%5+5)+']/a').click()
                    else:   # (7, 8), (12, 13), (17, 18) page...
                        next_page=d.find_element_by_xpath('/html/body/div/div[2]/div[3]/div/div/div[2]/div/div[2]/ul/li['+str((page+1)%5)+']/a').click()
            except: break


    df4=add_dataframe(names, type_, ingredients,abvs,volumes,descriptions,imageURLs,cnt)

    df4.to_csv('./type.csv', encoding='utf-8-sig', mode='a')