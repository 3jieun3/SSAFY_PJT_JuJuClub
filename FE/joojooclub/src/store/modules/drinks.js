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
    basicTagList:{
        sweetSelect: ['낮음', '보통', '높음'],
        percentSelect: ['5% 미만', '6 - 10%', '11 - 20%', '21 - 34%', '35% 이상'],
        kindSelect: ['탁주', '약주/청주', '과실주', '증류주', '기타 주류']
      },
  },
  getters: {
    getQuestion(state) {
      return state.questions
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
    }
  },
  actions: {
    chooseAnswer({ commit }, answerStr) {
      commit('CHOOSE_ANSWER', answerStr)
    }
  }
}