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
    // 개인 피드 상세
    feed : {},
    
    commentPage: {},
    currentPage: 1,
    pageList: [1, 2, 3]
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
    currentPage: state => state.currentPage,
    pageList: state => state.pageList,
  },
  mutations: {
    SET_TOKEN: ( state, token ) => state.token = token,
    SET_CURRENT_USER: ( state, user ) => state.currentUser = user,
    // SET_PROFILE: ( state, profile ) => state.profile = profile,
    SET_AUTH_ERROR: ( state, error ) => state.authError = error,
    SET_FEED: ( state, feed ) => state.feed = feed,
    SET_COMMENT_PAGE: ( state, commentPage ) => state.commentPage = commentPage,
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
    // },

    fetchCommentPage({ commit, getters }, { currentPage, firstPage, lastPage }) {
      const commentPage = {
        totalPage: Math.ceil(getters.commentsCount / 3),
        currentPage: currentPage,
        firstPage: firstPage,
        lastPage: lastPage,
        // pageList: Range(firstPage, lastPage),
      }
      commit('SET_COMMENT_PAGE', commentPage)
    }
  }
}