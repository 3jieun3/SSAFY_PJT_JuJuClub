import router from '@/router'
import axios from 'axios'
import joojooclub from '@/api/joojooclub'
import accounts from '@/store/modules/accounts'
import _ from 'lodash'

export default {
  namespaced: true,
  
  state: {
    feed: {},
    bestFeeds: [],
    feeds: [],
    bestdummy: [
      {
        feedIndex: 1,
        title: '피드 1',
        content: '파전에 막걸리만 먹으라는 법은 없지요! 우중충한 하루의 마무리로 피쉬앤칩스와 막걸리 한잔 드시고 가세요^^~ 감각적인 음악과 맛있는 음식, 놀거리가 있는 곳은? 이태원 모마!!',
        likeCount: 3333,
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
        likeMembers: [],
      },
      {
        feedIndex: 2,
        title: '피드 2',
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
        likeMembers: [],
      },
      {
        feedIndex: 3,
        title: '피드 3',
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
        likeMembers: [],
      },
    ],
  },

  getters: {
    feed: state => state.feed,
    isFeed: state => !_.isEmpty(state.feed),
    feeds: state => state.feeds,
    bestFeeds: state => state.bestFeeds,
    isFeeds: state => !_.isEmpty(state.feeds)
    // isFeeds: state => !_.isEmpty(state.feeds) && !_.isEmpty(state.bestfeeds)
  },

  mutations: {
    SET_FEED: (state, feed) => state.feed = feed,
    SET_FEEDS (state, feeds) {
      feeds.map(feed => feed.likeMembers = []) // 좋아요한 멤버 목록 속성 추가
      state.feeds = feeds
    },
    SET_BEST_FEEDS: (state, bestFeeds) => state.bestFeeds = bestFeeds,
    // SET_BEST_FEEDS: (state) => state.bestFeeds.push(...state.bestdummy),
    SET_LIKE_MEMBERS (state, [feedIndex, likeMembers]) {
      state.feeds.find(feed => feed.feedIndex === feedIndex).likeMembers = likeMembers
      // state.feeds.find(feed => feed.feedIndex === feedIndex).likeMembers.push(11)
    },
    UPDATE_LIKE_MEMBERS (state, [memberIndex, feedIndex]) {
      const idx = state.feeds.find(feed => feed.feedIndex === feedIndex).likeMembers.indexOf(memberIndex)
      if (idx === -1) { // 좋아요 하지않았던 피드 -> 좋아요
        state.feeds.find(feed => feed.feedIndex === feedIndex).likeMembers.push(memberIndex)
        state.feeds.find(feed => feed.feedIndex === feedIndex).likeCount += 1
        console.log('좋아요', feedIndex)
      } else {          // 좋아요 했던 피드 -> 좋아요 취소
        state.feeds.find(feed => feed.feedIndex === feedIndex).likeMembers.splice(idx, 1)
        console.log('좋아요 취소', feedIndex)
        state.feeds.find(feed => feed.feedIndex === feedIndex).likeCount -= 1
      }
    }
  },

  actions: {
    fetchFeed({ commit }, feedIndex) {
      axios({
        url: joojooclub.feed.info(feedIndex),
        method: 'get',
      })
      .then((res) => {
        commit('SET_FEED', res.data.feed)
      })
      .catch((err) => {
        console.log(err.response)
      })
    },

    fetchAllFeeds({ commit }) {
      axios({
        url: joojooclub.feed.infos(),
        method: 'get',
      })
      .then((res) => {
        commit('SET_FEEDS', res.data.feeds)
        commit('SET_BEST_FEEDS', res.data.bestFeeds)
      })
    },

    fetchLikeMembers({ commit }, feedIndex) {
      axios({
        url: joojooclub.feed.likeInfo(feedIndex),
        method: 'get'
      })
      .then((res) => {
        commit('SET_LIKE_MEMBERS', [feedIndex, res.data.likeList])
      })
      .catch((err) => {
        console.log(err.response)
      })
    },

    createFeed({ getters }, formdata) {
      if (confirm('등록하시겠습니까?')) {
        axios({
          url: joojooclub.feed.valid(),
          method: 'post',
          headers: {
            ...getters.authHeader,
            'content-type': 'multipart/form-data',
          },
          data: formdata,
        })
        .then((res) => {
          console.log(res)
          alert('피드가 등록되었습니다.')
          router.push({
            name: 'profile',
            params: { userPK: getters.currentUser.member.memberIndex }
          })
        })
        .catch((err) => {
          console.log(err.response)
          router.push({
            name: 'profile',
            params: { userPK: getters.currentUser.member.memberIndex }
          })
        })
      }
    },

    updateFeed({ getters }, formdata) {
      for (let [k, v] of formdata.entries()) console.log(k, v)
      if(confirm('수정하시겠습니까?')) {
        axios({
          url: joojooclub.feed.valid(),
          method: 'put',
          headers: {
            ...getters.authHeader,
            'content-type': 'multipart/form-data',
          },
          data: formdata,
        })
        .then(() => {
          alert('피드가 수정되었습니다.')
          router.push({
            name: 'profile',
            params: { userPK: getters.feed.member.memberIndex }
          })
        })
        .catch((err) => {
          console.log(err.response)
          router.push({
            name: 'profile',
            params: { userPK: getters.feed.member.memberIndex }
          })
        })
      }
    },

    deleteFeed({ getters }, feedIndex) {
      if(getters.isLoggedIn) {
        if(confirm('피드를 삭제하시겠습니까?')){
          axios({
            url: joojooclub.feed.valid(),
            method: 'delete',
            headers: getters.authHeader,
            data: { feedIndex },
          })
          .then(() => {
            alert('피드가 정상적으로 삭제되었습니다.')
            router.push({
              name: 'profile',
              params: { userPK: getters.currentUser.member.memberIndex }
            })
          })
          .catch((err) => {
            console.log(err.response)
            router.push({
              name: 'profile',
              params: { userPK: getters.currentUser.member.memberIndex }
            })
          })
        }
      }  
    },

    likeFeed({ commit, getters }, feedIndex) {
      if(getters.isCurrentUser) {
        axios({
          url: joojooclub.feed.like(),
          method: 'post',
          headers: getters.authHeader,
          data: { feedIndex },
        })
        .then(() => {
          commit('UPDATE_LIKE_MEMBERS', [getters.currentUser.member.memberIndex, feedIndex])
        })
      }
    },
  },
  modules: {
    accounts,
  },
}