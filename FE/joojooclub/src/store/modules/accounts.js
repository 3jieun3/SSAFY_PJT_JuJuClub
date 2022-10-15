import router from '@/router'
import axios from 'axios'
import joojooclub from '@/api/joojooclub'
import _ from 'lodash'

export default {
  // namespaced: true,

  state: {
    // 서버에서 받은 토큰, localStorage에서 가져오기, 없으면 ''
    token: localStorage.getItem('token') || '',
    // signup, login할 때 오류 메세지
    authError: null,
    // dj_rest_auth accounts/user/
    currentUser: {},
    myReviews: [],
    myLikeFeeds: [],
    // review pagination
    myReviewPaging: {
      currentPage: 1,
      totalPage: 0,
      pageList: [],
    },
    myShowReviews: [],
  },
  getters: {
    // 로그인 했니?: state에 token값이 있으면 (true) 로그인 한 것
    isLoggedIn: state => !!state.token,
    token: state => state.token,
    currentUser: state => state.currentUser,
    authError: state => state.authError,
    authHeader: state => ({ Authorization: 'Bearer ' + `${state.token}` }),
    isCurrentUser: state => !_.isEmpty(state.currentUser),
    myReviews: state => state.myReviews,
    myLikeFeeds: state => state.myLikeFeeds,
    // review pagination
    myReviewPaging: state => state.myReviewPaging,
    myPageList: state => state.myReviewPaging.pageList,
    myShowReviews: state => state.myShowReviews,
  },
  mutations: {
    SET_TOKEN: (state, token) => state.token = token,
    SET_CURRENT_USER: (state, user) => state.currentUser = user,
    SET_AUTH_ERROR: (state, error) => state.authError = error,
    SET_MY_REVIEWS (state, reviews) {
      state.myReviews = reviews
      state.myReviewPaging.totalPage = Math.ceil(state.myReviews.length / 5)
    },
    DELETE_MY_REVIEW (state, reviewIndex) {
      _.remove(state.myReviews, (review) => (review.reviewIndex === reviewIndex))
      state.myReviewPaging.totalPage = Math.ceil(state.myReviews.length / 5)
    },
    GO_MY_PAGE(state, page) {
      // 현재 페이지를 선택된 페이지로 변경
      state.myReviewPaging.currentPage = page
      // pagination nav에 보여줄 page list 변경
      let fromPage = (page - 1 === 0) ? 1 : page - 1
      state.myReviewPaging.pageList = _.range(fromPage, fromPage + 3).filter(n => _.inRange(n, 1, state.myReviewPaging.totalPage + 1))
      // page 에서 보여줄 review list 변경
      state.myShowReviews = state.myReviews.slice((page - 1) * 5, page * 5)
    },
    UPDATE_MY_LIKE_FEEDS(state, [feedIndex, feed]) {
      const likeFeed = state.currentUser.likeFeeds.filter(fd => fd.feed.feedIndex === feedIndex)
      if (likeFeed.length > 0) { // 좋아요 했던 피드 -> 좋아요 목록에서 빠짐
        state.currentUser.likeFeeds.splice(state.currentUser.likeFeeds.indexOf(likeFeed[0]), 1)
      } else {  // 좋아요 하지 않았던 피드 -> 좋아요 목록에 추가
        // currentUser.likeFeeds 객체 형식에 맞게 재정의하여 추가
        const newLikeFeed = {
          feed: _.omit(feed, 'likeMembers'),
          likeFeedIndex: {
            feedIndex: feedIndex,
            memberIndex: state.currentUser.member.memberIndex,
          },
          member: state.currentUser.member,
        }
        state.currentUser.likeFeeds.unshift(newLikeFeed)
      }
    }
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

    logout({ dispatch, getters, commit }) {
      if (getters.isLoggedIn){
        dispatch('removeToken')
        commit('SET_CURRENT_USER', null)
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
          commit('SET_CURRENT_USER', _.omit(res.data, 'reviews'))
          commit('SET_MY_REVIEWS', res.data.reviews)
          dispatch('goMyPage', 1)
        }).catch((err) => {
          // 토큰이 잘못된 경우
          if (err.response.status === 401) {
            // 사용자 정보 삭제하고 로그인 페이지로 이동
            dispatch('removeToken')
            commit('SET_CURRENT_USER', null)
            router.push({ name: 'login' })
          }
          // 토큰 만료
          if (err.response.status === 500) {
            alert("세션이 만료되었습니다. 다시 로그인 후 시도해 주세요.")
            dispatch('removeToken')
            commit('SET_CURRENT_USER', null)
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
            commit('SET_CURRENT_USER', null)
            router.push({ name: 'login' })
          }
          if (err.response.status === 500) {
            alert("세션이 만료되었습니다. 다시 로그인 후 시도해 주세요.")
            dispatch('removeToken')
            commit('SET_CURRENT_USER', null)
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
          commit('SET_CURRENT_USER', null)
          alert('정상적으로 탈퇴되었습니다')
          router.push({ name: 'main' })
        })
        .catch(err => {
          // 토큰이 잘못된 경우
          if (err.response.status === 401) {
            // 사용자 정보 삭제하고 로그인 페이지로 이동
            dispatch('removeToken')
            commit('SET_CURRENT_USER', null)
            router.push({ name: 'login' })
          }
          if (err.response.status === 500) {
            alert("세션이 만료되었습니다. 다시 로그인 후 시도해 주세요.")
            dispatch('removeToken')
            commit('SET_CURRENT_USER', null)
            router.push({ name: 'login' })
          }
        })
      }
    },

    deleteMyReview({ getters, commit, dispatch }, reviewIndex) {
      commit('DELETE_MY_REVIEW', reviewIndex)
      dispatch('goMyPage', getters.myReviewPaging.currentPage)
    },

    updateMyLikeFeeds({ commit }, [feedIndex, feed]) {
      commit('UPDATE_MY_LIKE_FEEDS', [feedIndex, feed])
    },

    goMyPage({ commit }, page) {
      commit('GO_MY_PAGE', page)
    },
  }
}