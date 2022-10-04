import router from "@/router"
import axios from "axios"
import joojooclub from "@/api/joojooclub"
import accounts from '@/store/modules/accounts'
import _ from 'lodash'
// import config from '@/api_key.js'
// import dotenv from 'dotenv';
// dotenv.config();

export default {
  namespaced: true,
  state: {
    // drink detail 정보
    drink: {},
    drinkNames: [],
    reviews: [],
    // drink detail reviews pagination
    reviewPaging: {
      currentPage: 1,
      totalPage: 0,
      pageList: []
    },
    showReviews: [],
    // todayDrinks: [],
    todayDrinks: {},
    // todayDrinks: [
    //   {
    //     todayDrinkIndex: 0,
    //     ment: '비 오는 날에는 막걸리 한 잔 어때요?',
    //     drink: '국순당 쌀 막걸리',
    //     info: '딸기를 듬뿍 넣어 딸기향이 가득한 산뜻한 프리미엄 막걸리로 너무 차갑지 않은 온도로 마시면 더욱 조화롭고 향기로운 맛을 느낄 수 있다.',
    //     drinkImage: 'https://thumb.mt.co.kr/06/2021/11/2021111911385598861_1.jpg',
    //     tags: ['탁주', '인기', '과일']
    //   },
    //   {
    //     drinkIndex: 1,
    //     ment: '9월 25일 일요일, 30%의 사람들이 이 술을 선택했습니다',
    //     drink: '소주',
    //     info: '딸기를 듬뿍 넣어 딸기향이 가득한 산뜻한 프리미엄 막걸리로 너무 차갑지 않은 온도로 마시면 더욱 조화롭고 향기로운 맛을 느낄 수 있다.',
    //     drinkImage: 'https://dimg.donga.com/ugc/CDB/WEEKLY/Article/60/62/80/93/606280930c4bd2738de6.jpg',
    //     tags: ['증류주', '혼술', '인기']
    //   },
    // ],
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
        question: '선호하는 당도는?',
        answers: ['달달함', '달지 않음']
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
        tagIndex: 1,
        tagName: '탁주',
        isClicked: false
      },
      {
        tagIndex: 2,
        tagName: '약주, 청주',
        isClicked: false
      },
      {
        tagIndex: 3,
        tagName: '과실주',
        isClicked: false
      },
      {
        tagIndex: 4,
        tagName: '증류주',
        isClicked: false
      },
      {
        tagIndex: 5,
        tagName: '리큐르, 기타주류',
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
    customTagList: [],
    choosedTagList: [],
    drinks: [],
    filteringDrinks: [],
    setFilteringDrinks: [],
    paging:{
      currentPage: 1,
      pageList: [],
      pageShow: [1, 2, 3, 4, 5],
    },
    isCards: true,
    weatherInfo: {},
    searchedDrink: {},
  },
  getters: {
    drink: state => state.drink,
    drinkNames: state => state.drinkNames,
    isDrinkNames: state => _.isEmpty(state.isDrinkNames),
    searchedDrink: state => state.searchedDrink,
    isSearched: state => _.isEmpty(state.searchedDrink),
    reviews: state => state.reviews,
    reviewPaging: state => state.reviewPaging,
    pageList: state => state.reviewPaging.pageList,
    showReviews: state => state.showReviews,
    getFilteringDrinks: state => state.filteringDrinks,
    getQuestion: state => state.questions,
    getQuestionEtc: state => state.questionEtc,
    getQuestionCount: state => state.questionEtc.questionCount,
    getChooseAnswer: state => state.questionEtc.choose,
    getCustomClicked: state => idx => state.tagList.customTagClicked[idx].isClicked,
    getIsCards: state => state.isCards,
    getTypeTagList: state => state.typeTagList,
    getPercentTagList: state => state.percentTagList,
    getAcidTagList: state => state.acidTagList,
    getSweetTagList: state => state.sweetTagList,
    getFruitTagList: state => state.fruitTagList,
    getBodyTagList: state => state.bodyTagList,
    getShowPage: state => state.paging.pageShow,
    showPage: state => state.setFilteringDrinks.slice((state.paging.currentPage-1)*12, state.paging.currentPage*12),
    todayDrinks: state => state.todayDrinks,
    weatherInfo: state => state.weatherInfo,
    totalPage: (state) => {
      if (state.setFilteringDrinks.length%12 === 0) {
        return parseInt(state.setFilteringDrinks.length) / 12
      } else {
        return parseInt(state.setFilteringDrinks.length / 12) + 1
      }
    },
  },
  mutations: {
    SET_DRINKS: (state, res) => state.drinks = res,
    SET_CUSTOM_TAGS: (state, res) => state.customTagList = res,
    CLEAR_RECOMMEND: (state) => state.recommendDrinks = [],
    CLEAR_CHOOSE: (state) => state.questionEtc.choose = [],
    CLEAR_QUESTION_COUNT(state) {
      state.questionEtc.questionCount = 0
    },
    UPDATE_SET_FILTERING_DRINKS: (state, res) => state.setFilteringDrinks = res,
    SET_DRINK:(state, [drink, tags, foods]) => state.drink = { ...drink, drinkType: drink.drinkType.drinkType, tags, foods },
    SET_DRINK_NAMES (state, drinkNames) {
      const newArray = []
      for (const [id, name] of drinkNames.entries()) {
        newArray.push({ drinkName: name, drinkIndex: id + 1 })
      }
      state.drinkNames = newArray
    },
    SET_SEARCH_DRINK: (state, searchedDrink) => state.searchedDrink = searchedDrink,
    SET_REVIEWS(state, reviews){ 
      state.reviews = reviews
      state.reviewPaging.totalPage = Math.ceil(reviews.length / 5)
    },
    ADD_REVIEW: (state, review) => state.reviews.unshift(review),
    GO_PAGE(state, page) {
      // 현재 페이지를 선택된 페이지로 변경
      state.reviewPaging.currentPage = page
      // pagination nav에 보여줄 page list 변경
      let fromPage = (page - 1 === 0) ? 1 : page - 1
      state.reviewPaging.pageList = _.range(fromPage, fromPage + 3).filter(n => _.inRange(n, 1, state.reviewPaging.totalPage + 1))
      // page 에서 보여줄 review list 변경
      state.showReviews = state.reviews.slice((page - 1) * 5, page * 5)
    },
    // 태그 검색 로직
    TAG_SEARCH(state) {
      if(state.choosedTagList.length) {
        state.filteringDrinks = []
        state.setFilteringDrinks = []
        for (let i=0; i < state.choosedTagList.length; i++) {
          let choosedTag = state.choosedTagList[i]
          if (choosedTag == '탁주' || choosedTag == '약주, 청주' || choosedTag == '과실주' || choosedTag == '증류주' || choosedTag == '리큐르, 기타주류') {
            state.filteringDrinks.push(...state.drinks.filter(drink => drink.drink.drinkType.drinkType === choosedTag))
          }
          else if (choosedTag == '8% 이하' || choosedTag == '35% 이상') {
            if (choosedTag == '8% 이하') {
              state.filteringDrinks.push(...state.drinks.filter(drink => drink.drink.abv*100 <= parseInt(choosedTag.split('%')[0])))
            }
            else {
              state.filteringDrinks.push(...state.drinks.filter(drink => drink.drink.abv*100 >= parseInt(choosedTag.split('%')[0])))
            }
          }
          else if (choosedTag == '9 - 15%' || choosedTag == '16 - 25%' || choosedTag == '26 - 34%') {
            const little = parseInt(choosedTag.split(' ')[0])
            const large = parseInt(choosedTag.split(' ')[2].substr(0, 2))
            state.filteringDrinks.push(...state.drinks.filter(drink => little <= drink.drink.abv*100 && drink.drink.abv*100 <= large))
          }
          else if (choosedTag == '있음' || choosedTag == '없음') {
            if (choosedTag == '있음') {
              state.filteringDrinks.push(...state.drinks.filter(drink => drink.tags.includes('산미')))
            }
            else {
              state.filteringDrinks.push(...state.drinks.filter(drink => !drink.tags.includes('산미')))
            }
          }
          else if (choosedTag == '달달함' || choosedTag == '달지 않음') {
            if (choosedTag == '달달함') {
              state.filteringDrinks.push(...state.drinks.filter(drink => drink.tags.includes('달달함')))
            }
            else {
              state.filteringDrinks.push(...state.drinks.filter(drink => !drink.tags.includes('달달함')))
            }
          }
          else {
            state.filteringDrinks.push(...state.drinks.filter(drink => drink.tags.includes(choosedTag)))
          }
        }
        for (let k=0; k < state.filteringDrinks.length; k++) {
          const Idx = state.drinks.indexOf(state.filteringDrinks[k])
          if (state.setFilteringDrinks.every(drink => drink.drink.drinkIndex != Idx)) {
            state.setFilteringDrinks.push(state.filteringDrinks[k])
          }
        }
      }
      else {
        state.setFilteringDrinks = state.drinks
        state.choosedTagList = []
      }
    },
    // 맞춤 추천 로직
    PUSH_ANSWER(state, answerStr) {
      const ques = state.questionEtc
      if (answerStr == '달달함' || answerStr == '그렇다') {
        answerStr = 1
      }
      else if (answerStr == '달지 않음' || answerStr == '아니다') {
        answerStr = 0
      }
      else if (answerStr == '41도 이상') {
        answerStr = '41 - 100'
      }
      ques.choose.push(answerStr)
      ques.questionCount += 1
    },
    // 기본 태그 체크 여부 확인 로직
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
          state.acidTagList.forEach(element => element.isClicked = false)
        state.choosedTagList = _.without(state.choosedTagList, '있음', '없음')
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
          state.sweetTagList.forEach(element => element.isClicked = false)
          state.choosedTagList = _.without(state.choosedTagList, '달달함', '달지 않음')
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
    // 커스텀 태그 체크 여부 확인 로직
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
    // TAG_CLICKED_RESET(state) {
      
    // },
    // 카드, 리스트 컴포넌트 변경
    CHANGE_CARDS(state) {
      state.isCards = true
    },
    CHANGE_LIST(state) {
      state.isCards = false
    },
    // GO_DETAIL_PAGE(state, idx) {
    //   router.push('recommend/' + idx)
    // },
    GO_FIRST_PAGE(state) {
      // 현재 페이지가 1보다 크다면 눌렀을 때 이전 페이지로
      // if (state.paging.currentPage > 1) {
      state.paging.currentPage = 1
      // 스크롤 올라감
      window.scrollTo({top:1000, behavior:"smooth"})
      // }
    },
    GO_LAST_PAGE(state) {
      // 현재 페이지가 마지막 페이지보다 작을 경우 눌렀을 때 다음 페이지
      // if (state.paging.currentPage < state.paging.pageList.length)
      state.paging.currentPage = state.paging.pageList.length
      window.scrollTo({top:1000, behavior:"smooth"})
    },
    GO_SPEC_PAGE(state, pageNum) {
      // 현재 페이지를 누른 버튼의 번호로 변경
      state.paging.currentPage = pageNum
      window.scrollTo({top:1000, behavior:"smooth"})
    },
    UPDATE_PAGE_SHOW(state, pageNum) {
      let fromPage = (pageNum < 3) ? 1 : state.paging.currentPage - 2
      state.paging.pageShow = _.range(fromPage, fromPage+5).filter(n => _.inRange(n, state.paging.pageList[0], state.paging.pageList.length+1))
    },
    GET_DRINKS(state) {
      axios({
        url: joojooclub.drinks.info(),
        method: 'get',
      })
        .then((res) => {
          state.drinks = res.data.drinks
          console.log(state.drinks)
          state.setFilteringDrinks = state.drinks
          // 페이지 계산
          if (state.setFilteringDrinks.length%12 == 0) {
            state.paging.pageList = _.range(1, Math.ceil(state.setFilteringDrinks.length/12))
          }
          else {
            state.paging.pageList = _.range(1, Math.ceil(state.setFilteringDrinks.length/12)+1)
          }
        })
        .catch((err) => {
          console.log(err)
          console.log('get drinks failed!')
        })
    },
    GET_TODAY_WEEK_DRINK(state, data) {
      state.todayDrinks['week'] = data
    },
    GET_TODAY_WEATHER_DRINK(state, data) {
      state.todayDrinks['weather'] = data
    },
    GET_WEATHER_INFO(state, data) {
      state.weatherInfo = data
    },
    // 전체 페이지 계산
    UPDATE_PAGE_LIST(state) {
      if (state.setFilteringDrinks.length%12 == 0) {
        state.paging.pageList = _.range(1, Math.ceil(state.setFilteringDrinks.length/12))
      }
      else {
        state.paging.pageList = _.range(1, Math.ceil(state.setFilteringDrinks.length/12)+1)
      }
    },
  },
  actions: {
    fetchDrink({ dispatch, commit }, drinkIndex) {
      axios({
        url: joojooclub.drinks.drinkInfo(drinkIndex),
        method: 'get',
      }).then((res) => {
        commit('SET_DRINK', [res.data.drink, res.data.tags, res.data.foods])
        dispatch('fetchReviews', res.data.reviews)
        dispatch('goPage', 1)
      }).catch((err) => {
        console.log(err.response)
        router.push({ name: 'drinks' })
      })
    },
    fetchDrinkNames({ getters, commit }) {
      axios({
        url: joojooclub.drinks.drinkNames(),
        method: 'get',
      }).then((res) => {
        if (getters.isDrinkNames)
        commit('SET_DRINK_NAMES', res.data.drinkNameList)
      }).catch((err) => {
        console.log(err.response)
      })
    },
    fetchReviews({ commit }, reviews) { commit('SET_REVIEWS', reviews) },
    goPage({ commit }, page) { commit('GO_PAGE', page) },
    setSearchDrink({ commit }, searchedDrink) { commit('SET_SEARCH_DRINK', searchedDrink)},
    createReview({ getters, commit }, review) {
      axios({
        url: joojooclub.drinks.review(),
        method: 'post',
        headers: getters.authHeader,
        data: review,
      }).then((res) => {
        console.log(res.data)
        const review = {
          'score': res.data.review.score,
          'reviewIndex': res.data.review.reviewIndex,
          'memberId': res.data.review.memberId,
          'createdAt': res.data.review.createdAt,
          'drinkIndex': res.data.review.drink.drinkIndex,
          'review': res.data.review.review
        }
        commit('ADD_REVIEW', review)
        commit('GO_PAGE', 1)
        // commit('ADD_REVIEW', res.data)
      }).catch((err) => {
        console.log(err.response)
        router.push({ name: 'drinks', params: { drinkPK: review.drinkIndex }})
      })
    },
    deleteReview({ getters }, reviewIndex) {
      if (confirm('후기를 삭제하시겠습니까?')) {
        axios({
          url: joojooclub.drinks.review(),
          method: 'delete',
          headers: getters.authHeader,
          data: { reviewIndex },
        }).then(() => {
          window.location.reload()   // 리다이렉트 이슈
        }).catch((err) => {
          console.log(err.response)
        })
      }
    },
    async pushAnswer({ commit, dispatch, getters }, answerStr) {
      await commit('PUSH_ANSWER', answerStr)
      if (getters.getQuestionCount == 5) {
        await dispatch('getRecommendDrinks')
        await router.push({ name: 'waitingPage' })
      }
    },
    
    clearRecommend({ commit }) {
      commit('CLEAR_RECOMMEND')
    },
    clearChoose({ commit }) {
      commit('CLEAR_CHOOSE')
    },
    clearQuestionCount({ commit }) {
      commit('CLEAR_QUESTION_COUNT')
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
    goFirstPage({ commit }, pageNum) {
      commit('GO_FIRST_PAGE')
      commit('UPDATE_PAGE_SHOW', pageNum)
    },
    goLastPage({ commit }, pageNum) {
      commit('GO_LAST_PAGE')
      commit('UPDATE_PAGE_SHOW', pageNum)
    },
    goSpecPage({ commit }, pageNum) {
      commit('GO_SPEC_PAGE', pageNum)
      commit('UPDATE_PAGE_SHOW', pageNum)
    },
    tagSearch({ commit }, pageNum) {
      commit('TAG_SEARCH')
      commit('UPDATE_PAGE_LIST')
      commit('GO_FIRST_PAGE')
      commit('UPDATE_PAGE_SHOW', pageNum)
    },
    getDrinks({ commit }) {
      axios({
        url: joojooclub.drinks.info(),
        method: 'get',
      })
        .then((res) => {
          commit('SET_DRINKS', res.data.drinks)
          commit('UPDATE_SET_FILTERING_DRINKS', res.data.drinks)
          commit('UPDATE_PAGE_LIST')
        })
        .catch((err) => {
          console.log(err)
          console.log('get drinks failed!')
        })
    },

    async getWeatherInfo({ commit, dispatch, getters }) {
      function getAPI() {
        // const API_KEY = config.VUE_APP_WEATHER_API
        // const API_KEY = process.env.VUE_APP_WEATHER_API
        const API_KEY = "eac7b9bb3823ad04ab6f2efb18ae20db"
        const info = {
          latitude: null, // 경도 ex) 36.1071
          longitude: null,  // 위도 ex) 128.408
          country: '',  // 국가 ex) KR
          location: '', // 지역 ex) Gumi
          humidity: null, // ex) 66
          temparature: null, // ex) 17.88
          weather: null,  // ex) clouds
          weather_description: '', // ex) overcast cloud
        }
  
        function onGeoOk(position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
          fetch(url).then((res) => res.json()).then((data) => {
            info.latitude = data.coord.lat;
            info.longitude = data.coord.lon;
            info.country = data.sys.country;
            info.location = data.name;
            info.humidity = data.main.humidity;
            info.temparature = data.main.temp;
            info.weather = data.weather[0].main;
            info.weather_description = data.weather[0].description;
          });
        }
        function onGeoError() {
          alert("Can't find you. No weather for you")
        }
        navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
        commit('GET_WEATHER_INFO', info)
      }
      try {
        getAPI()
        await dispatch('getTodayWeekDrink')
        await dispatch('getTodayWeatherDrink', getters.weatherInfo.weather)
      } catch (err) {
        console.log(err)
      }
    },

    async getTodayWeekDrink({ commit }) {
      await axios({
        url: joojooclub.drinks.todayWeekDrink(),
        method: 'get',
      }).then((res) => {
        commit('GET_TODAY_WEEK_DRINK', res.data)
      }).catch((err) => {
        console.log(err)
      })
    },

    async getTodayWeatherDrink({ commit }, data){
      await axios({
        url: joojooclub.drinks.todayWeatherDrink(data),
        method: 'get',
      }).then((res) => {
        commit('GET_TODAY_WEATHER_DRINK', res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    getCustomTags({ commit }) {
      axios({
        url: joojooclub.drinks.drinkTag(),
        method: 'get',
      })
        .then((res) => {
          commit('SET_CUSTOM_TAGS', res.data.taglist)
        })
    }
  },
  modules: {
    accounts,
    recommend: {
      state: {
        recommendDrinks: [],
      },
      getters: {
        getRecommendDrinks: state => state.recommendDrinks,
      },
      mutations: {
        SET_RECOMMEND_DRINKS: (state, res) => {
          state.recommendDrinks = res
        },
      },
      actions: {
        getRecommendDrinks({ commit, getters }) {
          axios({
            url: joojooclub.drinks.recommend(),
            method: 'post',
            data: {
              "startAge" : parseInt(getters.getChooseAnswer[0].split(' ')[0]),
              "endAge" : parseInt(getters.getChooseAnswer[0].split(' ')[2]),
              "gender" : getters.getChooseAnswer[1],
              "startAbv" : parseInt(getters.getChooseAnswer[2].split(' ')[0].replace('도', '')),
              "endAbv" : parseInt(getters.getChooseAnswer[2].split(' ')[2].replace('도', '')),
              "tag" : parseInt(getters.getChooseAnswer[3]),
              "Fruit" : parseInt(getters.getChooseAnswer[4]),
            }
          })
            .then((res) => {
              commit('SET_RECOMMEND_DRINKS', res.data)
            })
        },
      }
    },
  }
}