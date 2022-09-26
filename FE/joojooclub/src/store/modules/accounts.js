import router from '@/router'
import axios from 'axios'
import joojooclub from '@/api/joojooclub'
import _ from 'lodash'

export default {
  // namespaced: true,

  state: {
    // 서버에서 받은 토큰, localStorage에서 가져오기, 없으면 ''
    token: localStorage.getItem('token') || '',
    // dj_rest_auth accounts/user/
    currentUser: {},
    // profile: {},
    // signup, login할 때 오류 메세지
    authError: null,

    // profile: {
    //   memberPK: 1,
    //   id: "abc123",
    // },
    // feeds: [
    //   {
    //     feedId: 1,
    //     memberId: 1,
    //     title: '피드 1',
    //     content: '파전에 막걸리만 먹으라는 법은 없지요! 우중충한 하루의 마무리로 피쉬앤칩스와 막걸리 한잔 드시고 가세요^^~ 감각적인 음악과 맛있는 음식, 놀거리가 있는 곳은? 이태원 모마!!',
    //     likeCount: 3333,
    //     createdAt: '2022.03.03',
    //     customTags: ['#막걸리', '#피쉬앤칩스', '#혼막', '#퓨전'],
    //     imageUrl: 'ryan1.jpg'
    //   },
    //   { 
    //     feedId: 2,
    //     memberId: 1,
    //     title: '피드 2',
    //     content: '어제 곱창전골로 유명한 \'새가덕 순대\'를 다녀왔어요!!!! 곱창두개 삼겹하나 주문했다가 주위사람들이 모듬구이 먹길래 저도 변경해서 주문했어요. 청주랑 먹으니까 더 맛있네요. 다들 소곱말고 청곱 시도해보세요!',
    //     likeCount: 555,
    //     createdAt: '2022.03.13',
    //     customTags: ['#곱창', '#소주 대신 청주'],
    //     imageUrl: 'ryan2.jpg'
    //   },
    //   {
    //     feedId: 3,
    //     memberId: 1,
    //     title: '피드 3',
    //     content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
    //     likeCount: 333,
    //     createdAt: '2022.03.23',
    //     customTags: ['#청도', '#연어', '#아이스와인'],
    //     imageUrl: 'ryan3.jpg'
    //   },
    //   { 
    //     feedId: 4,
    //     memberId: 1,
    //     title: '피드 2',
    //     content: '어제 곱창전골로 유명한 \'새가덕 순대\'를 다녀왔어요!!!! 곱창두개 삼겹하나 주문했다가 주위사람들이 모듬구이 먹길래 저도 변경해서 주문했어요. 청주랑 먹으니까 더 맛있네요. 다들 소곱말고 청곱 시도해보세요!',
    //     likeCount: 555,
    //     createdAt: '2022.03.13',
    //     customTags: ['#곱창', '#소주 대신 청주'],
    //     imageUrl: 'ryan2.jpg'
    //   },
    //   {
    //     feedId: 5,
    //     memberId: 1,
    //     title: '피드 3',
    //     content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
    //     likeCount: 333,
    //     createdAt: '2022.03.23',
    //     customTags: ['#청도', '#연어', '#아이스와인'],
    //     imageUrl: 'ryan3.jpg'
    //   }
    // ],
    // likedFeeds: [
    //   {
    //     feedId: 1,
    //     memberId: 1,
    //     title: '피드 1',
    //     content: '파전에 막걸리만 먹으라는 법은 없지요! 우중충한 하루의 마무리로 피쉬앤칩스와 막걸리 한잔 드시고 가세요^^~ 감각적인 음악과 맛있는 음식, 놀거리가 있는 곳은? 이태원 모마!!',
    //     likeCount: 3333,
    //     createdAt: '2022.03.03',
    //     customTags: ['#막걸리', '#피쉬앤칩스', '#혼막', '#퓨전'],
    //     imageUrl: 'ryan1.jpg'
    //   },
    //   { 
    //     feedId: 2,
    //     memberId: 1,
    //     title: '피드 2',
    //     content: '어제 곱창전골로 유명한 \'새가덕 순대\'를 다녀왔어요!!!! 곱창두개 삼겹하나 주문했다가 주위사람들이 모듬구이 먹길래 저도 변경해서 주문했어요. 청주랑 먹으니까 더 맛있네요. 다들 소곱말고 청곱 시도해보세요!',
    //     likeCount: 555,
    //     createdAt: '2022.03.13',
    //     customTags: ['#곱창', '#소주 대신 청주'],
    //     imageUrl: 'ryan2.jpg'
    //   },
    //   {
    //     feedId: 3,
    //     memberId: 1,
    //     title: '피드 3',
    //     content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
    //     likeCount: 333,
    //     createdAt: '2022.03.23',
    //     customTags: ['#청도', '#연어', '#아이스와인'],
    //     imageUrl: 'ryan3.jpg'
    //   },
    //   { 
    //     feedId: 4,
    //     memberId: 1,
    //     title: '피드 2',
    //     content: '어제 곱창전골로 유명한 \'새가덕 순대\'를 다녀왔어요!!!! 곱창두개 삼겹하나 주문했다가 주위사람들이 모듬구이 먹길래 저도 변경해서 주문했어요. 청주랑 먹으니까 더 맛있네요. 다들 소곱말고 청곱 시도해보세요!',
    //     likeCount: 555,
    //     createdAt: '2022.03.13',
    //     customTags: ['#곱창', '#소주 대신 청주'],
    //     imageUrl: 'ryan2.jpg'
    //   },
    //   {
    //     feedId: 5,
    //     memberId: 1,
    //     title: '피드 3',
    //     content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
    //     likeCount: 333,
    //     createdAt: '2022.03.23',
    //     customTags: ['#청도', '#연어', '#아이스와인'],
    //     imageUrl: 'ryan3.jpg'
    //   }
    // ],
    comments: [
      {
        index: 1,
        drinkName: '복순도가 손막걸리',
        memberId: 1,
        nickname: 'abc123',
        score: 5,
        content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        createdAt: new Date(),
      },
      {
        index: 2,
        drinkName: '복순도가 손막걸리',
        memberId: 1,
        nickname: 'abc123',
        score: 6,
        content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        createdAt: new Date(),
      },
      {
        index: 3,
        drinkName: '복순도가 손막걸리',
        memberId: 1,
        nickname: 'abc123',
        score: 5,
        content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        createdAt: new Date(),
      },
      {
        index: 4,
        drinkName: '복순도가 손막걸리',
        memberId: 1,
        nickname: 'abc123',
        score: 5,
        content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        createdAt: new Date(),
      },
      {
        index: 5,
        drinkName: '복순도가 손막걸리',
        memberId: 1,
        nickname: 'abc123',
        score: 5,
        content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        createdAt: new Date(),
      },
    ],
    // 개인 피드
    feed : {},
  },
  getters: {
    // 로그인 했니?: state에 token값이 있으면 (true) 로그인 한 것
    isLoggedIn: state => !!state.token,
    token: state => state.token,
    currentUser: state => state.currentUser,
    // profile: state => state.profile,
    authError: state => state.authError,
    authHeader: state => ({ Authorization: 'Bearer ' + `${state.token}` }),
    isCurrentUser: state => !_.isEmpty(state.currentUser),
    feed: state => state.feed,
  },
  mutations: {
    SET_TOKEN: ( state, token ) => state.token = token,
    SET_CURRENT_USER: ( state, user ) => state.currentUser = user,
    // SET_PROFILE: ( state, profile ) => state.profile = profile,
    SET_AUTH_ERROR: ( state, error ) => state.authError = error,
    SET_FEED: ( state, feed ) => state.feed = feed,
  },
  actions: {
    saveToken({ commit }, token) {
      commit('SET_TOKEN', token)  // state.token 추가
      localStorage.setItem('token', token)  // localStorage에 token 추가
    },

    removeToken({ commit }) {
      commit('SET_TOKEN', '') // state.token 삭제
      localStorage.setItem('token', '') // localstorage에 빈 token 추가
    },

    signup({ dispatch }, credentials) {
      axios({
        url: joojooclub.accounts.signup(),
        method: 'post',
        data: credentials,
      })
        .then(() => {
          alert('회원가입 되었습니다')
          dispatch('fetchCurrentUser')
          router.push({ name: 'login'})
        })
        .catch((err) => {
          console.log(err)
          alert('회원가입에 실패했습니다')
        })
    },

    login({ dispatch }, credentials) {
      axios({
        url: joojooclub.accounts.login(),
        method: 'post',
        data: credentials,
      })
        .then((res) => {
          const accessToken = res.data.token; // 응답 토큰 저장
          axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
          dispatch('saveToken', accessToken)
          dispatch('fetchCurrentUser')
          router.push({ name: 'main' })
        })
        .catch(() => {
          alert("아이디 또는 비밀번호를 확인해주세요")
        })
    },

    logout({ dispatch, getters, commit }) {
      if (getters.isLoggedIn){
        dispatch('removeToken')
        commit('SET_CURRENT_USER', {})
        // router.push({ name: 'main' })
      } else {
        alert('로그인이 필요한 페이지입니다')
        router.push({ name: 'login' })
      }
    },

    fetchCurrentUser({ commit, getters, dispatch }) {
      // 사용자가 로그인한 경우 (token 존재)
      if (getters.isLoggedIn) {
        axios({
          url: joojooclub.accounts.info(),
          method: 'get',
          headers: getters.authHeader,
        }).then((res) => {
          commit('SET_CURRENT_USER', res.data)
        }).catch((err) => {
          // 토큰이 잘못된 경우(만료 등)
          if (err.response.status === 401) {
            // 사용자 정보 삭제하고 로그인 페이지로 이동
            dispatch('removeToken')
            commit('SET_CURRENT_USER', {})
            router.push({ name: 'login' })
          }
        })
      }
    },

    updateMember({ dispatch, getters, commit }, credentials) {
      if (getters.isLoggedIn) {
        axios({
          url: joojooclub.accounts.info(),
          method: 'put',
          data: credentials,
          headers: getters.authHeader,
        }).then((res) => {
          commit('SET_CURRENT_USER', res.data)
          alert('회원정보가 수정되었습니다')
          router.push({ name: 'main' })
        }).catch((err) => {
          // 토큰이 잘못된 경우(만료 등)
          if (err.response.status === 401) {
            // 사용자 정보 삭제하고 로그인 페이지로 이동
            dispatch('removeToken')
            commit('SET_CURRENT_USER', {})
            router.push({ name: 'login' })
          }
        })
      }
    },

    signout({ dispatch, getters, commit }){
      if (getters.isLoggedIn) {
      axios({
        url: joojooclub.accounts.info(),
        method: 'delete',
        headers: getters.authHeader,
      })
        .then(() => {
          dispatch('removeToken')
          commit('SET_CURRENT_USER', {})
          alert('정상적으로 탈퇴되었습니다')
          router.push({ name: 'main' })
        })
        .catch(err => {
          // 토큰이 잘못된 경우(만료 등)
          if (err.response.status === 401) {
            // 사용자 정보 삭제하고 로그인 페이지로 이동
            dispatch('removeToken')
            commit('SET_CURRENT_USER', {})
            router.push({ name: 'login' })
          }
        })
      }
    },

    fetchFeed({ commit, getters }, feedIndex) {
      axios({
        url: joojooclub.feed.info(feedIndex),
        method: 'get',
        headers: getters.authHeader
      })
      .then(res => commit('SET_FEED', res.data))
      .catch(err => console.err(err.response))
    },
    
    createFeed({ commit, /* getters */ }, feed) {
      commit('SET_FEED', feed)
      router.push({
        name: 'feed',
        // name: 'profile',
        // params: { userPK: getters.feed.memberIndex }
      })
    },

    // updateFeed({ commit }, { feedIndex, feed }) {
    //   commit('SET_FEED', feed)
    //   router.push({
    //     name: 'feed',
    //   })
    // }
  }
}