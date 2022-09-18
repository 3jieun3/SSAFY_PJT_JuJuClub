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
    recommendResults: [
      {
        drinkIndex: 0,
        drinkName: '걍즐겨',
        tags: ['탁주', '선물', '혼술'],
        drinkKind: '탁주',
        drinkImg: '',
      },
      {
        drinkIndex: 1,
        drinkName: '딸깅',
        tags: ['과일', '달달', '탁주'],
        drinkKind: '탁주',
        drinkImg: '',
      },
      {
        drinkIndex: 2,
        drinkName: '복순도가',
        tags: ['탁주', '인기', '선물'],
        drinkKind: '탁주',
        drinkImg: '',
      }
    ]
  },
  getters: {
    getQuestionByIndex(state) {
      return state.questions
    }
  },
  mutations: {
  },
  actions: {
  }
}