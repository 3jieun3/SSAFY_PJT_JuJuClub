# 예시

/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[6]/div[3]/a[1]

/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[6]/div[3]/a[9]

/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[6]/div[3]/a[8]

```
<a href="#" role="button" data-nclick="N=a:rev.page,r:17">17</a>
```





# 더 술 크롤링

```
<a href="#" onclick="fn_egov_link_page(10); return false;">10</a>
```

/html/body/div/div[2]/div[3]/div/div/div[2]/div/div[2]/ul/li[2]/a

/html/body/div/div[2]/div[3]/div/div/div[2]/div/div[2]/ul/li[3]/a

/html/body/div/div[2]/div[3]/div/div/div[2]/div/div[2]/ul/li[4]/a

/html/body/div/div[2]/div[3]/div/div/div[2]/div/div[2]/ul/li[5]/a

/html/body/div/div[2]/div[3]/div/div/div[2]/div/div[2]/ul/li[6]/a



1, 6페이지 -> 2

2, 7페이지 -> 3

3, 8페이지 -> 4

4, 9페이지 -> 5

5,  10페이지 -> 6

(page+1) % 5



## 문제점

1. 페이지 당 술 개수가 10개인데, 3페이지까지밖에 가져오지 못한다.
2. 예시의 경우 pagination tag에 페이지 번호가 들어있는데, 이 사이트에서는 2~6번 a tag를 재사용하기 때문에 a 태그 내부의 onclick 함수에 페이지 번호를 줘야 한다.