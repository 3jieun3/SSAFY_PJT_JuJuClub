import router from "@/router"

export default {
  namespaced: true,
  state: {
    todayDrinks: [
      {
        drinkIndex: 0,
        ment: '비 오는 날에는 막걸리 한 잔 어때요?',
        drink: '국순당 쌀 막걸리',
        info: '딸기를 듬뿍 넣어 딸기향이 가득한 산뜻한 프리미엄 막걸리로 너무 차갑지 않은 온도로 마시면 더욱 조화롭고 향기로운 맛을 느낄 수 있다.',
        drinkImage: 'https://thumb.mt.co.kr/06/2021/11/2021111911385598861_1.jpg',
        tags: ['탁주', '인기', '과일']
      },
      {
        drinkIndex: 1,
        ment: '9월 25일 일요일, 30%의 사람들이 이 술을 선택했습니다',
        drink: '소주',
        info: '딸기를 듬뿍 넣어 딸기향이 가득한 산뜻한 프리미엄 막걸리로 너무 차갑지 않은 온도로 마시면 더욱 조화롭고 향기로운 맛을 느낄 수 있다.',
        drinkImage: 'https://dimg.donga.com/ugc/CDB/WEEKLY/Article/60/62/80/93/606280930c4bd2738de6.jpg',
        tags: ['증류주', '혼술', '인기']
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
    typeTagList: [
      {
        tagName: '탁주',
        isClicked: false
      },
      {
        tagName: '약주 / 청주',
        isClicked: false
      },
      {
        tagName: '과실주',
        isClicked: false
      },
      {
        tagName: '증류주',
        isClicked: false
      },
      {
        tagName: '기타 주류',
        isClicked: false
      },
    ],
    percentTagList: [
      {
        tagName: '8% 이하',
        isClicked: false
      },
      {
        tagName: '9 - 15%',
        isClicked: false
      },
      {
        tagName: '16 - 25%',
        isClicked: false
      },
      {
        tagName: '26 - 34%',
        isClicked: false
      },
      {
        tagName: '35% 이상',
        isClicked: false
      },
    ],
    acidTagList: [
      {
        tagName: '있음',
        isClicked: false
      },
      {
        tagName: '없음',
        isClicked: false
      },
    ],
    sweetTagList: [
      {
        tagName: '달달함',
        isClicked: false
      },
      {
        tagName: '달지 않음',
        isClicked: false
      },
    ],
    fruitTagList: [
      {
        tagName: '매실',
        isClicked: false
      },
      {
        tagName: '유자',
        isClicked: false
      },
      {
        tagName: '귤',
        isClicked: false
      },
      {
        tagName: '포도',
        isClicked: false
      },
      {
        tagName: '복분자',
        isClicked: false
      },
    ],
    bodyTagList: [
      {
        tagName: '묵직함',
        isClicked: false
      },
      {
        tagName: '가벼움',
        isClicked: false
      },
    ],
    customTagList: [
      {
        tagName: '과일',
        isClicked: false
      },
      {
        tagName: '밤',
        isClicked: false
      },
      {
        tagName: '땅콩',
        isClicked: false
      },
      {
        tagName: '꽃향',
        isClicked: false
      },
      {
        tagName: '인삼',
        isClicked: false
      },
      {
        tagName: '송이향',
        isClicked: false
      },
      {
        tagName: '오크향',
        isClicked: false
      },
      {
        tagName: '온더락',
        isClicked: false
      },
      {
        tagName: '하이볼',
        isClicked: false
      },
      {
        tagName: '반주',
        isClicked: false
      },
      {
        tagName: '축하주',
        isClicked: false
      },
      {
        tagName: '홈술',
        isClicked: false
      },
      {
        tagName: '혼술',
        isClicked: false
      },
      {
        tagName: '대통령상',
        isClicked: false
      },
      {
        tagName: '선물',
        isClicked: false
      },
      {
        tagName: '가정용',
        isClicked: false
      },
      {
        tagName: '파티용',
        isClicked: false
      },
      {
        tagName: '명절',
        isClicked: false
      },
      {
        tagName: '연말',
        isClicked: false
      },
      {
        tagName: '생일',
        isClicked: false
      },
      {
        tagName: '여행',
        isClicked: false
      },
      {
        tagName: '가성비',
        isClicked: false
      },
      {
        tagName: '수제',
        isClicked: false
      },
      {
        tagName: '부드러움',
        isClicked: false
      },
      {
        tagName: '청량',
        isClicked: false
      },
      {
        tagName: '상큼',
        isClicked: false
      },
      {
        tagName: '깔끔',
        isClicked: false
      },
      {
        tagName: '고소함',
        isClicked: false
      },
      {
        tagName: '드라이',
        isClicked: false
      },
    ],
    choosedTagList: [],
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
      {
        drinkName: '장수 생막걸리',
        drinkInfo: '장수(長壽) 생막걸리는 효모균이 그대로 살아있습니다. 백미를 사용해 장기저온숙성 방식으로 만들어져 영양이 풍부하고 자연발효에 의한 탄산과 어울려 감칠맛과 청량감이 일품입니다. 또한 고품격 전통 막걸리의 대명사로서 트림과 숙취도 거의 없어 오랜시간 동안 사랑을 받고 있습니다.',
        drinkType: '탁주',
        drinkPercent: '7%',
        drinkImg: 'https://image.ajunews.com/content/image/2022/02/03/20220203093355761859.jpg',
        tags: ['탁주', '혼술'],
      },
      {
        drinkName: '14',
        drinkInfo: '14',
        drinkType: '탁주',
        drinkPercent: '7',
        drinkImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJU7IGny3SvV9TdLy2d2G1hfx2CYCA32pLw&usqp=CAU',
        tags: ['인기', '혼술', '사과'],
      },
      {
        drinkName: '15',
        drinkInfo: '15',
        drinkType: '탁주',
        drinkPercent: '7',
        drinkImg: 'https://image.ajunews.com/content/image/2022/02/03/20220203093355761859.jpg',
        tags: ['탁주', '선물'],
      },
      {
        drinkName: '16',
        drinkInfo: '16',
        drinkType: '탁주',
        drinkPercent: '7',
        drinkImg: 'https://image.ajunews.com/content/image/2022/02/03/20220203093355761859.jpg',
        tags: ['사과', '혼술'],
      },
      {
        drinkName: '17',
        drinkInfo: '17',
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
      {
        drinkName: 'end',
        drinkInfo: '12',
        drinkType: '탁주',
        drinkPercent: '7',
        drinkImg: 'https://image.ajunews.com/content/image/2022/02/03/20220203093355761859.jpg',
        tags: ['탁주', '혼술'],
      },
    ],
    filteringDrinks: [],
    paging:{
        totalPage: 25,
        currentPage: 1,
    },
    drink: {
      drinkIndex: 1,
      drinkName: '장수 생막걸리',
      description: '장수(長壽) 생막걸리는 효모균이 그대로 살아있습니다. 백미를 사용해 장기저온숙성 방식으로 만들어져 영양이 풍부하고 자연발효에 의한 탄산과 어울려 감칠맛과 청량감이 일품입니다. 또한 고품격 전통 막걸리의 대명사로서 트림과 숙취도 거의 없어 오랜시간 동안 사랑을 받고 있습니다.',
      drinkType: '탁주',
      ingredient: '원료, 원료, 원료',
      abv: 7,
      volume: '350ml',
      imageUrl: 'https://image.ajunews.com/content/image/2022/02/03/20220203093355761859.jpg',
      tags: ['탁주', '혼술'],
    },
  },
  getters: {
    getFilteringDrinks: (state) => {
      return state.filteringDrinks
    },
    getQuestion: (state) => {
      return state.questions
    },
    getCustomClicked: state => idx => {
      return state.tagList.customTagClicked[idx].isClicked
    },
    getIsCards: (state) => {
      return state.isCards
    },
    totalPage: (state) => {
      if (state.paging.totalPage%12 === 0) {
        return parseInt(state.paging.totalPage) / 12
      } else {
        return parseInt(state.paging.totalPage / 12) + 1
      }
    },
    showPage: (state) => {
      const a = state.drinks.slice((state.paging.currentPage-1)*12, state.paging.currentPage*12)
      return a
    },
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
    // SEARCH_DRINKS(state) {
    //   state.filteringDrinks = []
    //   for (let i=0; i < state.choosedTagList.length; i++) {
    //     if (choosedTagList[i] in state.typeTagList) {
    //       const typeIdx = state.typeTagList.indexOf(choosedTagList[i])
    //       const typeFilter = 0
    //     }
    //     else {
    //       const tag = state.choosedTagList[i]
    //       for (let j=0; j < state.drinks.length; j++) {
    //         const drink = state.drinks[j]
    //         const filtering = state.drinks.filter(state.drinks.tags)
    //       }
    //     }
    //   }
    // },
    BASIC_TAG_CLICKED(state, [tagOrder, tag]) {
      // 태그 타입 확인
      if ( tagOrder === 0) {
        // 태그 체크 여부 확인
        if (tag.isClicked) {
          // 태그가 눌려있을 때
          const nameIdx = state.choosedTagList.indexOf(tag.tagName)
          state.choosedTagList.splice(nameIdx, 1)
        }
        // 태그가 눌리지 않은 상태일 때
        else {
          state.choosedTagList.push(tag.tagName)
        }
        // 태그 상태 변경
        const idx = state.typeTagList.indexOf(tag)
        state.typeTagList[idx].isClicked = !state.typeTagList[idx].isClicked
      }
      else if ( tagOrder === 1) {
        if (tag.isClicked) {
          const nameIdx = state.choosedTagList.indexOf(tag.tagName)
          state.choosedTagList.splice(nameIdx, 1)
        }
        else {
          state.choosedTagList.push(tag.tagName)
        }
        const idx = state.percentTagList.indexOf(tag)
        state.percentTagList[idx].isClicked = !state.percentTagList[idx].isClicked
      }
      else if ( tagOrder === 2) {
        if (tag.isClicked) {
          const nameIdx = state.choosedTagList.indexOf(tag.tagName)
          state.choosedTagList.splice(nameIdx, 1)
        }
        else {
          state.choosedTagList.push(tag.tagName)
        }
        const idx = state.acidTagList.indexOf(tag)
        state.acidTagList[idx].isClicked = !state.acidTagList[idx].isClicked
      }
      else if ( tagOrder === 3) {
        if (tag.isClicked) {
          const nameIdx = state.choosedTagList.indexOf(tag.tagName)
          state.choosedTagList.splice(nameIdx, 1)
        }
        else {
          state.choosedTagList.push(tag.tagName)
        }
        const idx = state.sweetTagList.indexOf(tag)
        state.sweetTagList[idx].isClicked = !state.sweetTagList[idx].isClicked
      }
      else if ( tagOrder === 4) {
        if (tag.isClicked) {
          const nameIdx = state.choosedTagList.indexOf(tag.tagName)
          state.choosedTagList.splice(nameIdx, 1)
        }
        else {
          state.choosedTagList.push(tag.tagName)
        }
        const idx = state.fruitTagList.indexOf(tag)
        state.fruitTagList[idx].isClicked = !state.fruitTagList[idx].isClicked
      }
      else if ( tagOrder === 5) {
        if (tag.isClicked) {
          const nameIdx = state.choosedTagList.indexOf(tag.tagName)
          state.choosedTagList.splice(nameIdx, 1)
        }
        else {
          state.choosedTagList.push(tag.tagName)
        }
        const idx = state.bodyTagList.indexOf(tag)
        state.bodyTagList[idx].isClicked = !state.bodyTagList[idx].isClicked
      }
    },
    CUSTOM_TAG_CLICKED(state, [tagOrder, idx, tag]) {
      if (tagOrder === 6) {
        if (tag.isClicked) {
          const nameIdx = state.choosedTagList.indexOf(tag.tagName)
          state.choosedTagList.splice(nameIdx, 1)
        } else {
          state.choosedTagList.push(tag.tagName)
        }
        state.customTagList[idx].isClicked = !state.customTagList[idx].isClicked
      }
    },
    // 카드, 리스트 컴포넌트 변경
    CHANGE_CARDS(state) {
      state.isCards = true
    },
    CHANGE_LIST(state) {
      state.isCards = false
    },
    GO_PREV_PAGE(state) {
      // 현재 페이지가 1보다 크다면 눌렀을 때 이전 페이지로
      if (state.paging.currentPage > 1) {
      state.paging.currentPage -= 1
      // 스크롤 올라감
      window.scrollTo({top:1000, behavior:"smooth"})
      }
    },
    GO_NEXT_PAGE(state) {
      // 현재 페이지가 마지막 페이지보다 작을 경우 눌렀을 때 다음 페이지
      if (state.paging.currentPage < state.paging.totalPage/12)
      state.paging.currentPage += 1
      window.scrollTo({top:1000, behavior:"smooth"})
    },
    GO_SPEC_PAGE(state, pageNum) {
      // 현재 페이지를 누른 버튼의 번호로 변경
      state.paging.currentPage = pageNum
      window.scrollTo({top:1000, behavior:"smooth"})
    }
  },
  actions: {
    chooseAnswer({ commit }, answerStr) {
      commit('CHOOSE_ANSWER', answerStr)
    },
    basicTagClicked({ commit }, [tagOrder, tag]) {
      commit('BASIC_TAG_CLICKED', [tagOrder, tag])
    },
    customTagClicked({ commit }, [tagOrder, idx, tag]) {
      commit('CUSTOM_TAG_CLICKED', [tagOrder, idx, tag])
    },
    changeCards({ commit }) {
      commit('CHANGE_CARDS')
    },
    changeList({ commit }) {
      commit('CHANGE_LIST')
    },
    goPrevPage({ commit }) {
      commit('GO_PREV_PAGE')
    },
    goNextPage({ commit }) {
      commit('GO_NEXT_PAGE')
    },
    goSpecPage({ commit }, pageNum) {
      commit('GO_SPEC_PAGE', pageNum)
    }
  }
}