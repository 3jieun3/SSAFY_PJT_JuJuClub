import router from "@/router"

export default {
  namespaced: true,
  state: {
    todayDrinks: [
      {
        drinkIndex: 0,
        ment: 'hi',
        drink: '막걸리',
        info: 'zz',
        drinkImage: 'https://thumb.mt.co.kr/06/2021/11/2021111911385598861_1.jpg'
      },
      {
        drinkIndex: 1,
        ment: 'hello',
        drink: '소주',
        info: 'dd',
        drinkImage: 'https://dimg.donga.com/ugc/CDB/WEEKLY/Article/60/62/80/93/606280930c4bd2738de6.jpg',
      },
    ],
    questions: [
      {
        questionIndex: 0,
        question: '당신의 나이는?',
        answers: ['20 - 35', '36 - 45', '46 - 55', '56 - 60', '60 - 70']
      },
      {
        questionIndex: 1,
        question: '당신의 성별은?',
        answers: ['남', '여']
      },
      {
        questionIndex: 2,
        question: '선호하는 도수는?',
        answers: ['1도 - 8도', '9도 - 15도', '16도 - 25도', '26도 - 40도', '41도 이상']
      },
      {
        questionIndex: 3,
        question: '단맛을 선호하는 정도는?',
        answers: ['0', '1', '2', '3', '4', '5']
      },
      {
        questionIndex: 4,
        question: '과일향을 좋아하시나요?',
        answers: ['그렇다', '아니다']
      },
    ],
    questionEtc: {
      questionCount: 0,
      choose: [],
    },
    tagList: {
        sweetSelect: ['낮음', '보통', '높음'],
        sweetClicked: [false, false, false],
        percentSelect: ['5% 미만', '6 - 10%', '11 - 20%', '21 - 34%', '35% 이상'],
        kindSelect: ['탁주', '약주/청주', '과실주', '증류주', '기타 주류'],
        customTagList: ['사과', '선물', '혼술', '인기', '인삼'],
        customTagClicked: [false, false, false, false, false,],
        choosedTagList: []
    },
    isCards: true,
    drinks: [
      {
        drinkName: '장수 생막걸리',
        drinkInfo: '장수(長壽) 생막걸리는 효모균이 그대로 살아있습니다. 백미를 사용해 장기저온숙성 방식으로 만들어져 영양이 풍부하고 자연발효에 의한 탄산과 어울려 감칠맛과 청량감이 일품입니다. 또한 고품격 전통 막걸리의 대명사로서 트림과 숙취도 거의 없어 오랜시간 동안 사랑을 받고 있습니다.',
        drinkType: '탁주',
        drinkPercent: '7%',
        drinkImg: 'https://image.ajunews.com/content/image/2022/02/03/20220203093355761859.jpg',
        tags: ['탁주', '혼술'],
      },
      {
        drinkName: '2',
        drinkInfo: '2',
        drinkType: '탁주',
        drinkPercent: '7',
        drinkImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJU7IGny3SvV9TdLy2d2G1hfx2CYCA32pLw&usqp=CAU',
        tags: ['인기', '혼술', '사과'],
      },
      {
        drinkName: '3',
        drinkInfo: '3',
        drinkType: '탁주',
        drinkPercent: '7',
        drinkImg: 'https://image.ajunews.com/content/image/2022/02/03/20220203093355761859.jpg',
        tags: ['탁주', '선물'],
      },
      {
        drinkName: '4',
        drinkInfo: '4',
        drinkType: '탁주',
        drinkPercent: '7',
        drinkImg: 'https://image.ajunews.com/content/image/2022/02/03/20220203093355761859.jpg',
        tags: ['사과', '혼술'],
      },
      {
        drinkName: '5',
        drinkInfo: '5',
        drinkType: '탁주',
        drinkPercent: '7',
        drinkImg: 'https://image.ajunews.com/content/image/2022/02/03/20220203093355761859.jpg',
        tags: ['인삼', '혼술'],
      },
      {
        drinkName: '6',
        drinkInfo: '6',
        drinkType: '탁주',
        drinkPercent: '7',
        drinkImg: 'https://image.ajunews.com/content/image/2022/02/03/20220203093355761859.jpg',
        tags: ['탁주', '혼술'],
      },
      {
        drinkName: '7',
        drinkInfo: '7',
        drinkType: '탁주',
        drinkPercent: '7',
        drinkImg: 'https://image.ajunews.com/content/image/2022/02/03/20220203093355761859.jpg',
        tags: ['탁주', '혼술'],
      },
      {
        drinkName: '8',
        drinkInfo: '8',
        drinkType: '탁주',
        drinkPercent: '7',
        drinkImg: 'https://image.ajunews.com/content/image/2022/02/03/20220203093355761859.jpg',
        tags: ['탁주', '혼술'],
      },
      {
        drinkName: '9',
        drinkInfo: '9',
        drinkType: '탁주',
        drinkPercent: '7',
        drinkImg: 'https://image.ajunews.com/content/image/2022/02/03/20220203093355761859.jpg',
        tags: ['탁주', '혼술'],
      },
      {
        drinkName: '10',
        drinkInfo: '10',
        drinkType: '탁주',
        drinkPercent: '7',
        drinkImg: 'https://image.ajunews.com/content/image/2022/02/03/20220203093355761859.jpg',
        tags: ['탁주', '혼술'],
      },
      {
        drinkName: '11',
        drinkInfo: '11',
        drinkType: '탁주',
        drinkPercent: '7',
        drinkImg: 'https://image.ajunews.com/content/image/2022/02/03/20220203093355761859.jpg',
        tags: ['탁주', '혼술'],
      },
      {
        drinkName: '12',
        drinkInfo: '12',
        drinkType: '탁주',
        drinkPercent: '7',
        drinkImg: 'https://image.ajunews.com/content/image/2022/02/03/20220203093355761859.jpg',
        tags: ['탁주', '혼술'],
      },
    ],
    drink: {
      index: 1,
      name: '딸링 막걸리',
      abv: 5.5,
      volume: '650ml',
      ingredient: '물, 쌀, 올리고당, 딸기, 누룩, 조제종국, 효모, 아스파탐(감미료, 페닐알라닌 함유)',
      description: '딸기를 듬뿍 넣어 딸기향이 가득한 산뜻한 프리미엄 막걸리로 너무 차갑지 않은 온도로 마시면 더욱 조화롭고 향기로운 맛을 느낄 수 있다.',
      imageUrl: 'https://thesool.com/common/imageView.do?targetId=PR00000817&targetNm=PRODUCT',
      drinkType: '탁주',
      tags: ['딸기', '저도수', '선물용', '혼술'],
    },
    foods: [
      { index: 1, name: '곱창', imageUrl: '' },
      { index: 2, name: '피시앤칩스', imageUrl: '' },
      { index: 3, name: '연어사시미', imageUrl: '' },
    ],
		comments: [
			{
				index: 1, 
				createdAt: new Date(),
				nickname: 'writer1',
				score: 5,
				content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
			},
			{ 
				index: 2, 
				createdAt: new Date(),
				nickname: 'writer1',
				score: 5,
				content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
			},
			{ 
				index: 3, 
				createdAt: new Date(),
				nickname: 'writer1',
				score: 5,
				content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
			},
			{ 
				index: 4, 
				createdAt: new Date(),
				nickname: 'writer1',
				score: 5,
				content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
			},
			{ 
				index: 5, 
				createdAt: new Date(),
				nickname: 'writer1',
				score: 5,
				content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
			},
		],
  },
  getters: {
    getQuestion(state) {
      return state.questions
    },
    getCustomClicked(state, idx) {
      return state.tagList.customTagClicked[idx]
    },
    getIsCards(state) {
      return state.isCards
    }
  },
  mutations: {
    CHOOSE_ANSWER(state, answerStr) {
      const ques = state.questionEtc
      ques.choose.push(answerStr)
      ques.questionCount += 1
      if (ques.questionCount == 5) {
        router.push({ name: 'recommendResult' })
        ques.questionCount = 0
        ques.choose = []
      }
    },
    TAG_CLICKED(state, [idx, customTag]) {
      console.log(customTag)
      if (idx === 3) {
        const btnIdx = state.tagList.customTagList.indexOf(customTag)
        console.log(btnIdx)
        state.tagList.customTagClicked[btnIdx] = !state.tagList.customTagClicked[btnIdx]
      }
    },
    CHANGE_CARDS(state) {
      state.isCards = true
    },
    CHANGE_LIST(state) {
      state.isCards = false
    }
  },
  actions: {
    chooseAnswer({ commit }, answerStr) {
      commit('CHOOSE_ANSWER', answerStr)
    },
    tagClicked({ commit }, [idx, customTag]) {
      commit('TAG_CLICKED', [idx, customTag])
    },
    changeCards({ commit }) {
      commit('CHANGE_CARDS')
    },
    changeList({ commit }) {
      commit('CHANGE_LIST')
    },
  }
}