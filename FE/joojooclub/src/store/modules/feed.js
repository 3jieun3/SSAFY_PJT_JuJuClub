export default {
  namespaced: true,
  
  state: {
    bestFeeds: [
      {
        feedId: 1,
        memberId: 1,
        title: '베스트 피드 1',
        content: '파전에 막걸리만 먹으라는 법은 없지요! 우중충한 하루의 마무리로 피쉬앤칩스와 막걸리 한잔 드시고 가세요^^~ 감각적인 음악과 맛있는 음식, 놀거리가 있는 곳은? 이태원 모마!!',
        likeCount: 3333,
        createdAt: '2022.03.03',
        customTags: ['#막걸리', '#피쉬앤칩스', '#혼막', '#퓨전'],
        imageUrl: 'ryan1.jpg'
      },
      { 
        feedId: 2,
        memberId: 2,
        title: '베스트 피드 2',
        content: '어제 곱창전골로 유명한 \'새가덕 순대\'를 다녀왔어요!!!! 곱창두개 삼겹하나 주문했다가 주위사람들이 모듬구이 먹길래 저도 변경해서 주문했어요. 청주랑 먹으니까 더 맛있네요. 다들 소곱말고 청곱 시도해보세요!',
        likeCount: 555,
        createdAt: '2022.03.13',
        customTags: ['#곱창', '#소주 대신 청주'],
        imageUrl: 'ryan2.jpg'
      },
      {
        feedId: 3,
        memberId: 3,
        title: '베스트 피드 3',
        content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        likeCount: 333,
        createdAt: '2022.03.23',
        customTags: ['#청도', '#연어', '#아이스와인'],
        imageUrl: 'ryan3.jpg'
      },
    ],
    feeds: [
      {
        feedId: 4,
        memberId: 1,
        title: '피쉬 앤 칩스 & 막걸리',
        content: '파전에 막걸리만 먹으라는 법은 없지요! 우중충한 하루의 마무리로 피쉬앤칩스와 막걸리 한잔 드시고 가세요^^~ 감각적인 음악과 맛있는 음식, 놀거리가 있는 곳은? 이태원 모마!!',
        likeCount: 4,
        createdAt: '2022.03.03',
        customTags: ['#막걸리', '#피쉬앤칩스', '#혼막', '#퓨전'],
        imageUrl: '피시앤칩스.jpg'
      },
      { 
        feedId: 5,
        memberId: 2,
        title: '곱창이랑 청주',
        content: '어제 곱창전골로 유명한 \'새가덕 순대\'를 다녀왔어요!!!! 곱창두개 삼겹하나 주문했다가 주위사람들이 모듬구이 먹길래 저도 변경해서 주문했어요. 청주랑 먹으니까 더 맛있네요. 다들 소곱말고 청곱 시도해보세요!',
        likeCount: 5,
        createdAt: '2022.03.13',
        customTags: ['#곱창', '#소주 대신 청주'],
        imageUrl: '곱창.jpg'
      },
      {
        feedId: 6,
        memberId: 3,
        title: '연어사시미와 아이스와인',
        content: '안녕하세요. 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        likeCount: 6,
        createdAt: '2022.03.23',
        customTags: ['#청도', '#연어', '#아이스와인'],
        imageUrl: '연어사시미.jpg'
      },
      {
        feedId: 7,
        memberId: 1,
        title: '피쉬 앤 칩스 & 막걸리',
        content: '파전에 막걸리만 먹으라는 법은 없지요! 우중충한 하루의 마무리로 피쉬앤칩스와 막걸리 한잔 드시고 가세요^^~ 감각적인 음악과 맛있는 음식, 놀거리가 있는 곳은? 이태원 모마!!',
        likeCount: 7,
        createdAt: '2022.03.03',
        customTags: ['#막걸리', '#피쉬앤칩스', '#혼막', '#퓨전'],
        imageUrl: '피시앤칩스.jpg'
      },
      { 
        feedId: 8,
        memberId: 2,
        title: '곱창이랑 청주',
        content: '어제 곱창전골로 유명한 \'새가덕 순대\'를 다녀왔어요!!!! 곱창두개 삼겹하나 주문했다가 주위사람들이 모듬구이 먹길래 저도 변경해서 주문했어요. 청주랑 먹으니까 더 맛있네요. 다들 소곱말고 청곱 시도해보세요!',
        likeCount: 8,
        createdAt: '2022.03.13',
        customTags: ['#곱창', '#소주 대신 청주'],
        imageUrl: '곱창.jpg'
      },
      {
        feedId: 9,
        memberId: 3,
        title: '연어사시미와 아이스와인',
        content: '안녕하세요. 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        likeCount: 9,
        createdAt: '2022.03.23',
        customTags: ['#청도', '#연어', '#아이스와인'],
        imageUrl: '연어사시미.jpg'
      },
      {
        feedId: 10,
        memberId: 1,
        title: '피쉬 앤 칩스 & 막걸리',
        content: '파전에 막걸리만 먹으라는 법은 없지요! 우중충한 하루의 마무리로 피쉬앤칩스와 막걸리 한잔 드시고 가세요^^~ 감각적인 음악과 맛있는 음식, 놀거리가 있는 곳은? 이태원 모마!!',
        likeCount: 10,
        createdAt: '2022.03.03',
        customTags: ['#막걸리', '#피쉬앤칩스', '#혼막', '#퓨전'],
        imageUrl: '피시앤칩스.jpg'
      },
      { 
        feedId: 11,
        memberId: 2,
        title: '곱창이랑 청주',
        content: '어제 곱창전골로 유명한 \'새가덕 순대\'를 다녀왔어요!!!! 곱창두개 삼겹하나 주문했다가 주위사람들이 모듬구이 먹길래 저도 변경해서 주문했어요. 청주랑 먹으니까 더 맛있네요. 다들 소곱말고 청곱 시도해보세요!',
        likeCount: 11,
        createdAt: '2022.03.13',
        customTags: ['#곱창', '#소주 대신 청주'],
        imageUrl: '곱창.jpg'
      },
      {
        feedId: 12,
        memberId: 3,
        title: '연어사시미와 아이스와인',
        content: '안녕하세요. 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        likeCount: 12,
        createdAt: '2022.03.23',
        customTags: ['#청도', '#연어', '#아이스와인'],
        imageUrl: '연어사시미.jpg'
      },
      {
        feedId: 13,
        memberId: 1,
        title: '피쉬 앤 칩스 & 막걸리',
        content: '파전에 막걸리만 먹으라는 법은 없지요! 우중충한 하루의 마무리로 피쉬앤칩스와 막걸리 한잔 드시고 가세요^^~ 감각적인 음악과 맛있는 음식, 놀거리가 있는 곳은? 이태원 모마!!',
        likeCount: 13,
        createdAt: '2022.03.03',
        customTags: ['#막걸리', '#피쉬앤칩스', '#혼막', '#퓨전'],
        imageUrl: '피시앤칩스.jpg'
      },
      { 
        feedId: 14,
        memberId: 2,
        title: '곱창이랑 청주',
        content: '어제 곱창전골로 유명한 \'새가덕 순대\'를 다녀왔어요!!!! 곱창두개 삼겹하나 주문했다가 주위사람들이 모듬구이 먹길래 저도 변경해서 주문했어요. 청주랑 먹으니까 더 맛있네요. 다들 소곱말고 청곱 시도해보세요!',
        likeCount: 14,
        createdAt: '2022.03.13',
        customTags: ['#곱창', '#소주 대신 청주'],
        imageUrl: '곱창.jpg'
      },
      {
        feedId: 15,
        memberId: 3,
        title: '연어사시미와 아이스와인',
        content: '안녕하세요. 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        likeCount: 15,
        createdAt: '2022.03.23',
        customTags: ['#청도', '#연어', '#아이스와인'],
        imageUrl: '연어사시미.jpg'
      },
    ],
  },

  getters: {
  },

  mutations: {
  },

  actions: {
  }
}