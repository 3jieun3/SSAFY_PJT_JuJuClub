import router from '@/router'
import axios from 'axios'
import joojooclub from '@/api/joojooclub'

export default {
  // namespaced: true,

  state: {
    // 서버에서 받은 토큰, localStorage에서 가져오기, 없으면 ''
    token: localStorage.getItem('token') || '',
    // dj_rest_auth accounts/user/
    currentUser: {},
    profile: {},
    // signup, login할 때 오류 메세지
    authError: null,

    // profile: {
    //   memberPK: 1,
    //   id: "abc123",
    // },
    feeds: [
      {
        feedId: 1,
        memberId: 1,
        title: '피드 1',
        content: '파전에 막걸리만 먹으라는 법은 없지요! 우중충한 하루의 마무리로 피쉬앤칩스와 막걸리 한잔 드시고 가세요^^~ 감각적인 음악과 맛있는 음식, 놀거리가 있는 곳은? 이태원 모마!!',
        likeCount: 3333,
        createdAt: '2022.03.03',
        customTags: ['#막걸리', '#피쉬앤칩스', '#혼막', '#퓨전'],
        imageUrl: 'ryan1.jpg'
      },
      { 
        feedId: 2,
        memberId: 1,
        title: '피드 2',
        content: '어제 곱창전골로 유명한 \'새가덕 순대\'를 다녀왔어요!!!! 곱창두개 삼겹하나 주문했다가 주위사람들이 모듬구이 먹길래 저도 변경해서 주문했어요. 청주랑 먹으니까 더 맛있네요. 다들 소곱말고 청곱 시도해보세요!',
        likeCount: 555,
        createdAt: '2022.03.13',
        customTags: ['#곱창', '#소주 대신 청주'],
        imageUrl: 'ryan2.jpg'
      },
      {
        feedId: 3,
        memberId: 1,
        title: '피드 3',
        content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        likeCount: 333,
        createdAt: '2022.03.23',
        customTags: ['#청도', '#연어', '#아이스와인'],
        imageUrl: 'ryan3.jpg'
      },
      { 
        feedId: 4,
        memberId: 1,
        title: '피드 2',
        content: '어제 곱창전골로 유명한 \'새가덕 순대\'를 다녀왔어요!!!! 곱창두개 삼겹하나 주문했다가 주위사람들이 모듬구이 먹길래 저도 변경해서 주문했어요. 청주랑 먹으니까 더 맛있네요. 다들 소곱말고 청곱 시도해보세요!',
        likeCount: 555,
        createdAt: '2022.03.13',
        customTags: ['#곱창', '#소주 대신 청주'],
        imageUrl: 'ryan2.jpg'
      },
      {
        feedId: 5,
        memberId: 1,
        title: '피드 3',
        content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        likeCount: 333,
        createdAt: '2022.03.23',
        customTags: ['#청도', '#연어', '#아이스와인'],
        imageUrl: 'ryan3.jpg'
      }
    ],
    likedFeeds: [
      {
        feedId: 1,
        memberId: 1,
        title: '피드 1',
        content: '파전에 막걸리만 먹으라는 법은 없지요! 우중충한 하루의 마무리로 피쉬앤칩스와 막걸리 한잔 드시고 가세요^^~ 감각적인 음악과 맛있는 음식, 놀거리가 있는 곳은? 이태원 모마!!',
        likeCount: 3333,
        createdAt: '2022.03.03',
        customTags: ['#막걸리', '#피쉬앤칩스', '#혼막', '#퓨전'],
        imageUrl: 'ryan1.jpg'
      },
      { 
        feedId: 2,
        memberId: 1,
        title: '피드 2',
        content: '어제 곱창전골로 유명한 \'새가덕 순대\'를 다녀왔어요!!!! 곱창두개 삼겹하나 주문했다가 주위사람들이 모듬구이 먹길래 저도 변경해서 주문했어요. 청주랑 먹으니까 더 맛있네요. 다들 소곱말고 청곱 시도해보세요!',
        likeCount: 555,
        createdAt: '2022.03.13',
        customTags: ['#곱창', '#소주 대신 청주'],
        imageUrl: 'ryan2.jpg'
      },
      {
        feedId: 3,
        memberId: 1,
        title: '피드 3',
        content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        likeCount: 333,
        createdAt: '2022.03.23',
        customTags: ['#청도', '#연어', '#아이스와인'],
        imageUrl: 'ryan3.jpg'
      },
      { 
        feedId: 4,
        memberId: 1,
        title: '피드 2',
        content: '어제 곱창전골로 유명한 \'새가덕 순대\'를 다녀왔어요!!!! 곱창두개 삼겹하나 주문했다가 주위사람들이 모듬구이 먹길래 저도 변경해서 주문했어요. 청주랑 먹으니까 더 맛있네요. 다들 소곱말고 청곱 시도해보세요!',
        likeCount: 555,
        createdAt: '2022.03.13',
        customTags: ['#곱창', '#소주 대신 청주'],
        imageUrl: 'ryan2.jpg'
      },
      {
        feedId: 5,
        memberId: 1,
        title: '피드 3',
        content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        likeCount: 333,
        createdAt: '2022.03.23',
        customTags: ['#청도', '#연어', '#아이스와인'],
        imageUrl: 'ryan3.jpg'
      }
    ],
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
  },
  getters: {
    // 로그인 했니?: state에 token값이 있으면 (true) 로그인 한 것
    isLoggedIn: state => !!state.token,
    token: state => state.token,
    currentUser: state => state.currentUser,
    profile: state => state.profile,
    authError: state => state.authError,
    authHeader: state => ({ Authorization: 'Bearer ' + `${state.token}` }),
  },
  mutations: {
    SET_TOKEN: ( state, token ) => state.token = token,
    SET_CURRENT_USER: ( state, user ) => state.currentUser = user,
    SET_PROFILE: ( state, profile ) => state.profile = profile,
    SET_AUTH_ERROR: ( state, error ) => state.authError = error,
  },
  actions: {
    saveToken({ commit }, token) {
      // state.token 추가
      commit('SET_TOKEN', token)
      // localStorage에 token 추가
      localStorage.setItem('token', token)
    },

    removeToken({ commit }) {
      // state.token 삭제
      commit('SET_TOKEN', '')
      // localstorage에 빈 token 추가
      localStorage.setItem('token', '')
    },

    signup({ dispatch }, credentials) {
      axios({
        // 사용자 입력정보를 signup URL로 post 요청보내기
        url: joojooclub.accounts.signup(),
        method: 'post',
        data: credentials,
      })
        .then(() => {
          // 응답 토큰 저장
          // const token = res.data.key
          // dispatch('saveToken', token)
          alert('회원가입 되었습니다')
          // 현재 사용자 정보 받기
          dispatch('fetchCurrentUser')
          // 메인페이지로 이동
          router.push({ name: 'login'})
        })
        .catch((err) => {
          console.log(credentials)
          console.log(err)
          alert('회원가입에 실패했습니다')
        })
    },

    login({ dispatch }, credentials) {
      axios({
        // 사용자 입력정보를 login URL로 post 보내기
        url: joojooclub.accounts.login(),
        method: 'post',
        data: credentials,
      })
        .then(res => {
          // 응답 토큰 저장
          const accessToken = res.data.token;
          axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
          dispatch('saveToken', accessToken)
          // 메인페이지(HomeView)로 이동
          router.push({ name: 'main' })
        })
        .catch(() => {
          alert("아이디 또는 비밀번호를 확인해주세요")
        })
    },

    logout({ dispatch }) {
      dispatch('removeToken')
      router.push({ name: 'main' })
    },

    fetchCurrentUser({ commit, getters, dispatch }) {
      // 사용자가 로그인했다면(토큰이 있다면)
      if (getters.isLoggedIn) {
        axios({
          // currentUserInfo URL로 get 요청보내기
          url: joojooclub.accounts.info(),
          method: 'get',
          headers: getters.authHeader,
        })
          // state.currentUser에 저장
          .then(res => {
            // console.log(res)
            commit('SET_CURRENT_USER', res.data)
          })
          .catch(err => {
            // 토큰이 잘못되면(401)
            console.log(err)
            if (err.response.status === 401) {
              // 기존 토큰 삭제 후 loginView로 이동
              dispatch('removeToken')
              router.push({ name: 'login' })
            }
          })
      }
    },

    updateMember({ dispatch, getters, commit }, credentials) {
      if (getters.isLoggedIn) {
        axios({
          // currentUserInfo URL로 get 요청보내기
          url: joojooclub.accounts.info(),
          method: 'put',
          data: credentials,
          headers: getters.authHeader,
        })
          // state.currentUser에 저장
          .then(res => {
            // console.log(res.data)
            commit('SET_CURRENT_USER', res.data)
            console.log(res)
          })
          .catch(err => {
            // 토큰이 잘못되면(401)
            console.log(err)
            if (err.response.status === 401) {
              // 기존 토큰 삭제 후 loginView로 이동
              dispatch('removeToken')
              router.push({ name: 'login' })
            }
          })
      }
    }
  }
}