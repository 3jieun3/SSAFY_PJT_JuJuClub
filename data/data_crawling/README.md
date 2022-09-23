# 데이터 크롤링

> 전통주 정보, 전통주 후기 크롤링



1. 크롤링 예시

   * 주제: LG전자 LG퓨리케어 FS061PSSA 네이버 쇼핑몰 후기 크롤링

   * 크롤링 과정

     1. ChromeWebdriver 다운로드

     2. 크롤링 코드가 있는 폴더 위치에 chromedriver.exe 파일 옮겨두기

     3. 크롤링 코드가 있는 폴더에 빈 csv 만들어두기

     4. ```python
        from selenium import webdriver
        from bs4 import BeautifulSoup
        from time import sleep
        import requests
        import pandas as pd
        import warnings
        warnings.filterwarnings('ignore')
        
        name=['LG 에어로타워']
        category=['별점']
        
        
        #LG 에어로타워 후기
        ns_address="https://search.shopping.naver.com/catalog/30128278618?cat_id=50002543&frm=NVSCPRO&query=%EC%97%90%EC%96%B4%EB%A1%9C%ED%83%80%EC%9B%8C&NaPm=ct%3Dl0ksn0vc%7Cci%3D5bbd25c0299ce5dbcb72ff2b1d41488ebd6d52ce%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D87194ce8ced4cb2b52968022b8eb9db67602d12e"
        #xpath
        shoppingmall_review="/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[6]/ul"
        
        
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
        
        def add_dataframe(name,category,reviews,stars,cnt):  #데이터 프레임에 저장
            #데이터 프레임생성
            df1=pd.DataFrame(columns=['type','category','review','star'])
            n=1
            if (cnt>0):
                for i in range(0,cnt-1):
                    df1.loc[n]=[name,category,reviews[i],stars[i]] #해당 행에 저장
                    i+=1
                    n+=1
            else:
                df1.loc[n]=[name,category,'null','null']
                n+=1    
            return df1
        
        # 리뷰 가져오기
        d.find_element_by_xpath(shoppingmall_review).click() #스크롤 건드리면 안됨
        name_=name[0]
        category_=category[0]
        reviews=[]
        stars=[]
        cnt=1   #리뷰index
        page=1
        
        
        # 1번 코드(스크롤 시 보이는 화면 제한)
        while True:
            j=1
            print ("페이지", page ,"\n") 
            sleep(2)
            while True: #한페이지에 20개의 리뷰, 마지막 리뷰에서 error발생
                try:
                    star=d.find_element_by_xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[6]/ul/li['+str(j)+']/div[1]/span[1]').text
                    review=d.find_element_by_xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[6]/ul/li['+str(j)+']/div[2]/div[1]/p').text
        
                    stars.append(star)
                    reviews.append(review)
        
                    if j%2==0: #화면에 2개씩 보이도록 스크롤
                        ELEMENT = d.find_element_by_xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[6]/ul/li['+str(j)+']/div[2]/div[1]')
                        d.execute_script("arguments[0].scrollIntoView(true);", ELEMENT)       
                    j+=1
                    print(cnt, review ,star, "\n")
                    cnt+=1 
                except: break
                    
            sleep(2)
            
            if page<11:#page10
                try: #리뷰의 마지막 페이지에서 error발생
                    page +=1
                    next_page=d.find_element_by_xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[6]/div[3]/a['+str(page)+']').click() 
                except: break #리뷰의 마지막 페이지에서 process 종료
                
            else : 
                try: #page11부터
                    page+=1
                    if page%10==0:
                        next_page=d.find_element_by_xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[6]/div[3]/a[11]').click()
                    elif page%10==1:
                        next_page=d.find_element_by_xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[6]/div[3]/a[12]').click()
                    else:
                        next_page=d.find_element_by_xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[6]/div[3]/a['+str(page%10+1)+']').click()
                except: break
        
        df4=add_dataframe(name_,category_,reviews,stars,cnt)
        ```
   
   * 참고
     * https://velog.io/@kjh1337/%EB%84%A4%EC%9D%B4%EB%B2%84-%EC%87%BC%ED%95%91%EB%AA%B0-%EB%A6%AC%EB%B7%B0-%ED%81%AC%EB%A1%A4%EB%A7%81
     * https://github.com/Jimin980921/Text_mining/blob/master/Project/textmining_project_crawling.ipynb

