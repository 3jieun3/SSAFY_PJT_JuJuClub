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
    // signup, login할 때 오류 메세지
    authError: null,
    // 후기 pagination
    myReviewPaging: {
      currentPage: 1,
      totalPage: 0,
      pageList: [],
    },
    myShowReviews: [],
    // dummy
    dummyReviews: [
      {
        reviewIndex: 1,
        score: 5,
        review: '1 안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        createdAt: "2022-09-26T11:14:29",
        member: {
          memberIndex: 11,
          id: "jetest1212",
        },
        drink: {
          drinkIndex: 4,
          drinkName: "DOK막걸리",
          drinkType: {
            drinkTypeIndex: 1,
            drinkType: "탁주"
          },
        },
      },
      {
        reviewIndex: 2,
        score: 5,
        review: '2 안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        createdAt: "2022-09-26T11:14:29",
        member: {
          memberIndex: 11,
          id: "jetest1212",
        },
        drink: {
          drinkIndex: 4,
          drinkName: "DOK막걸리",
          drinkType: {
            drinkTypeIndex: 1,
            drinkType: "탁주"
          },
        },
      },
      {
        reviewIndex: 3,
        score: 5,
        review: '3 안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        createdAt: "2022-09-26T11:14:29",
        member: {
          memberIndex: 11,
          id: "jetest1212",
        },
        drink: {
          drinkIndex: 4,
          drinkName: "DOK막걸리",
          drinkType: {
            drinkTypeIndex: 1,
            drinkType: "탁주"
          },
        },
      },
      {
        reviewIndex: 4,
        score: 5,
        review: '4 안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        createdAt: "2022-09-26T11:14:29",
        member: {
          memberIndex: 11,
          id: "jetest1212",
        },
        drink: {
          drinkIndex: 4,
          drinkName: "DOK막걸리",
          drinkType: {
            drinkTypeIndex: 1,
            drinkType: "탁주"
          },
        },
      }, 
      {
        reviewIndex: 5,
        score: 5,
        review: '5 안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        createdAt: "2022-09-26T11:14:29",
        member: {
          memberIndex: 11,
          id: "jetest1212",
        },
        drink: {
          drinkIndex: 4,
          drinkName: "DOK막걸리",
          drinkType: {
            drinkTypeIndex: 1,
            drinkType: "탁주"
          },
        },
      },
      {
        reviewIndex: 6,
        score: 5,
        review: '6 안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        createdAt: "2022-09-26T11:14:29",
        member: {
          memberIndex: 11,
          id: "jetest1212",
        },
        drink: {
          drinkIndex: 4,
          drinkName: "DOK막걸리",
          drinkType: {
            drinkTypeIndex: 1,
            drinkType: "탁주"
          },
        },
      },
      {
        reviewIndex: 7,
        score: 5,
        review: '7 안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        createdAt: "2022-09-26T11:14:29",
        member: {
          memberIndex: 11,
          id: "jetest1212",
        },
        drink: {
          drinkIndex: 4,
          drinkName: "DOK막걸리",
          drinkType: {
            drinkTypeIndex: 1,
            drinkType: "탁주"
          },
        },
      },
      {
        reviewIndex: 8,
        score: 5,
        review: '8 안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        createdAt: "2022-09-26T11:14:29",
        member: {
          memberIndex: 11,
          id: "jetest1212",
        },
        drink: {
          drinkIndex: 4,
          drinkName: "DOK막걸리",
          drinkType: {
            drinkTypeIndex: 1,
            drinkType: "탁주"
          },
        },
      },
      {
        reviewIndex: 9,
        score: 5,
        review: '9 안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        createdAt: "2022-09-26T11:14:29",
        member: {
          memberIndex: 11,
          id: "jetest1212",
        },
        drink: {
          drinkIndex: 4,
          drinkName: "DOK막걸리",
          drinkType: {
            drinkTypeIndex: 1,
            drinkType: "탁주"
          },
        },
      },
      {
        reviewIndex: 10,
        score: 5,
        review: '10 안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        createdAt: "2022-09-26T11:14:29",
        member: {
          memberIndex: 11,
          id: "jetest1212",
        },
        drink: {
          drinkIndex: 4,
          drinkName: "DOK막걸리",
          drinkType: {
            drinkTypeIndex: 1,
            drinkType: "탁주"
          },
        },
      }, 
      {
        reviewIndex: 11,
        score: 5,
        review: '11 안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
        createdAt: "2022-09-26T11:14:29",
        member: {
          memberIndex: 11,
          id: "jetest1212",
        },
        drink: {
          drinkIndex: 4,
          drinkName: "DOK막걸리",
          drinkType: {
            drinkTypeIndex: 1,
            drinkType: "탁주"
          },
        },
      },
    ],
    dummyFeeds: [
      {
        feedIndex: 1,
        title: '피드 1',
        content: '파전에 막걸리만 먹으라는 법은 없지요! 우중충한 하루의 마무리로 피쉬앤칩스와 막걸리 한잔 드시고 가세요^^~ 감각적인 음악과 맛있는 음식, 놀거리가 있는 곳은? 이태원 모마!!',
        likeCount: 555,
        createdAt: '2022-03-03T11:10:07',
        customTags: '#막걸리 #피쉬앤칩스 #혼막 #퓨전',
        imageUrl: 'https://picsum.photos/200/300',
        member: {
          memberIndex: 1,
          id: 'ssafy'
        },
        drink: {
          drinkIndex: 5,
          drinkName: 'G12 골디락스'
        },
      },
      {
        feedIndex: 2,
        title: '피드 2',
        content: '파전에 막걸리만 먹으라는 법은 없지요! 우중충한 하루의 마무리로 피쉬앤칩스와 막걸리 한잔 드시고 가세요^^~ 감각적인 음악과 맛있는 음식, 놀거리가 있는 곳은? 이태원 모마!!',
        likeCount: 99,
        createdAt: '2022-03-03T11:10:07',
        customTags: '#막걸리 #피쉬앤칩스 #혼막 #퓨전',
        imageUrl: 'https://picsum.photos/600/500',
        member: {
          memberIndex: 1,
          id: 'ssafy'
        },
        drink: {
          drinkIndex: 5,
          drinkName: 'G12 골디락스'
        },
      },
      {
        feedIndex: 3,
        title: '피드 3',
        content: '파전에 막걸리만 먹으라는 법은 없지요! 우중충한 하루의 마무리로 피쉬앤칩스와 막걸리 한잔 드시고 가세요^^~ 감각적인 음악과 맛있는 음식, 놀거리가 있는 곳은? 이태원 모마!!',
        likeCount: 3333,
        createdAt: '2022-03-03T11:10:07',
        customTags: '#막걸리 #피쉬앤칩스 #혼막 #퓨전',
        imageUrl: 'https://picsum.photos/400/600',
        member: {
          memberIndex: 1,
          id: 'ssafy'
        },
        drink: {
          drinkIndex: 5,
          drinkName: 'G12 골디락스'
        },
      },
      {
        feedIndex: 4,
        title: '피드 4',
        content: '파전에 막걸리만 먹으라는 법은 없지요! 우중충한 하루의 마무리로 피쉬앤칩스와 막걸리 한잔 드시고 가세요^^~ 감각적인 음악과 맛있는 음식, 놀거리가 있는 곳은? 이태원 모마!!',
        likeCount: 3333,
        createdAt: '2022-03-03T11:10:07',
        customTags: '#막걸리 #피쉬앤칩스 #혼막 #퓨전',
        imageUrl: 'https://picsum.photos/600/900',
        member: {
          memberIndex: 1,
          id: 'ssafy'
        },
        drink: {
          drinkIndex: 5,
          drinkName: 'G12 골디락스'
        },
      },
      {
        feedIndex: 5,
        title: '피드 5',
        content: '파전에 막걸리만 먹으라는 법은 없지요! 우중충한 하루의 마무리로 피쉬앤칩스와 막걸리 한잔 드시고 가세요^^~ 감각적인 음악과 맛있는 음식, 놀거리가 있는 곳은? 이태원 모마!!',
        likeCount: 3333,
        createdAt: '2022-03-03T11:10:07',
        customTags: '#막걸리 #피쉬앤칩스 #혼막 #퓨전',
        imageUrl: 'https://picsum.photos/600',
        member: {
          memberIndex: 1,
          id: 'ssafy2'
        },
        drink: {
          drinkIndex: 5,
          drinkName: 'G12 골디락스'
        },
      },
    ],
  },
  getters: {
    // 로그인 했니?: state에 token값이 있으면 (true) 로그인 한 것
    isLoggedIn: state => !!state.token,
    token: state => state.token,
    currentUser: state => state.currentUser,
    authError: state => state.authError,
    authHeader: state => ({ Authorization: 'Bearer ' + `${state.token}` }),
    isCurrentUser: state => !_.isEmpty(state.currentUser),
    myReviews: state => state.currentUser.reviews,
    myReviewPaging: state => state.myReviewPaging,
    myPageList: state => state.myReviewPaging.pageList,
    myShowReviews: state => state.myShowReviews,
  },
  mutations: {
    SET_TOKEN: ( state, token ) => state.token = token,
    SET_CURRENT_USER: ( state, user ) => { 
      state.currentUser = user
      state.currentUser.reviews.push(...state.dummyReviews)    // 더미
      state.currentUser.feeds.push(...state.dummyFeeds)       // 더미
      state.currentUser.likeFeeds.push(...state.dummyFeeds)   // 더미
      state.myReviewPaging.totalPage = Math.ceil(state.currentUser.reviews.length / 3)
    },
    SET_AUTH_ERROR: ( state, error ) => state.authError = error,
    GO_MY_PAGE( state, page ) {
      // 현재 페이지를 선택된 페이지로 변경
      state.myReviewPaging.currentPage = page
      // pagination nav에 보여줄 page list 변경
      let fromPage = (page - 1 === 0) ? 1 : page - 1
      state.myReviewPaging.pageList = _.range(fromPage, fromPage + 3).filter(n => _.inRange(n, 1, state.myReviewPaging.totalPage + 1))
      // page 에서 보여줄 review list 변경
      state.myShowReviews = state.currentUser.reviews.slice((page - 1) * 3, page * 3)
    },
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
        .catch(() => {
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
          // axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
          dispatch('saveToken', accessToken)
          dispatch('fetchCurrentUser')
          router.push({ name: 'main' })
        })
        .catch(() => {
          alert("아이디 또는 비밀번호를 확인해주세요")
        })
    },

    logout({ dispatch, getters }) {
      if (getters.isLoggedIn){
        dispatch('removeToken')
        // commit('SET_CURRENT_USER', {})
        // 현재 페이지가 main이 아니면 로그아웃 이후 main 페이지로 이동
        if(router.currentRoute.fullPath !== '/') router.push('/')
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
          dispatch('goMyPage', 1)
        }).catch((err) => {
          // 토큰이 잘못된 경우
          if (err.response.status === 401) {
            // 사용자 정보 삭제하고 로그인 페이지로 이동
            dispatch('removeToken')
            commit('SET_CURRENT_USER', {})
            router.push({ name: 'login' })
          }
          // 토큰 만료
          if (err.response.status === 500) {
            alert("세션이 만료되었습니다. 다시 로그인 후 시도해 주세요.")
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
        }).catch((err) => {
          // 토큰이 잘못된 경우
          if (err.response.status === 401) {
            // 사용자 정보 삭제하고 로그인 페이지로 이동
            dispatch('removeToken')
            commit('SET_CURRENT_USER', {})
            router.push({ name: 'login' })
          }
          if (err.response.status === 500) {
            alert("세션이 만료되었습니다. 다시 로그인 후 시도해 주세요.")
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
          // 토큰이 잘못된 경우
          if (err.response.status === 401) {
            // 사용자 정보 삭제하고 로그인 페이지로 이동
            dispatch('removeToken')
            commit('SET_CURRENT_USER', {})
            router.push({ name: 'login' })
          }
          if (err.response.status === 500) {
            alert("세션이 만료되었습니다. 다시 로그인 후 시도해 주세요.")
            dispatch('removeToken')
            commit('SET_CURRENT_USER', {})
            router.push({ name: 'login' })
          }
        })
      }
    },

    goMyPage({ commit }, page) {
      commit('GO_MY_PAGE', page)
    },
  }
}