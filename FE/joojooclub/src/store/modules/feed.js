import router from '@/router'
import axios from 'axios'
import joojooclub from '@/api/joojooclub'

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
        imageUrl: 'ryan1.jpg',
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
        likeCount: 3333,
        createdAt: '2022-03-03T11:10:07',
        customTags: '#막걸리 #피쉬앤칩스 #혼막 #퓨전',
        imageUrl: 'ryan1.jpg',
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
        imageUrl: 'ryan1.jpg',
        member: {
          memberIndex: 1,
          id: 'ssafy'
        },
        drink: {
          drinkIndex: 5,
          drinkName: 'G12 골디락스'
        },
      },
    ],
    dummy: [
      {
        feedIndex: 1,
        title: '피드 1',
        content: '파전에 막걸리만 먹으라는 법은 없지요! 우중충한 하루의 마무리로 피쉬앤칩스와 막걸리 한잔 드시고 가세요^^~ 감각적인 음악과 맛있는 음식, 놀거리가 있는 곳은? 이태원 모마!!',
        likeCount: 555,
        createdAt: '2022-03-03T11:10:07',
        customTags: '#막걸리 #피쉬앤칩스 #혼막 #퓨전',
        imageUrl: 'ryan1.jpg',
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
        imageUrl: 'ryan1.jpg',
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
        imageUrl: 'ryan1.jpg',
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
        imageUrl: 'ryan1.jpg',
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
        imageUrl: 'ryan1.jpg',
        member: {
          memberIndex: 2,
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
    feed: state => state.feed,
    feeds: state => state.feeds,
    bestFeeds: state => state.bestFeeds,
  },

  mutations: {
    SET_FEED: (state, feed) => state.feed = feed,
    SET_FEEDS: (state, feeds) => state.feeds = feeds,
    SET_BEST_FEEDS: (state, bestFeeds) => state.bestFeeds = bestFeeds,
  },

  actions: {
    fetchFeed({ commit }, feedIndex) {
      axios({
        url: joojooclub.feed.info(feedIndex),
        method: 'get',
      })
      .then((res) => {
        commit('SET_FEED', res.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
    },
    
    fetchAllFeeds({ commit }) {
      axios({
        url: joojooclub.feed.info(),
        method: 'get',
      })
      .then((res) => {
        commit('SET_FEEDS', res.data.feeds)
        commit('SET_BEST_FEEDS', res.data.bestFeeds)
      })
      .catch((err) => {
        console.log(err.response)
      })
    },

    createFeed({ getters }, feed) {
      if (getters.isLoggedIn) {
        axios({
          url: joojooclub.feed.valid(),
          method: 'post',
          headers: getters.authHeader,
          data: feed,
        })
        .then(() => {
          router.push({
            name: 'profile',
            params: { userPK: getters.currentUser.memberIndex }
          })
        })
        .catch((err) => {
          console.log(err.response)
          router.push({
            name: 'profile',
            params: { userPK: getters.currentUser.memberIndex }
          })
        })
      }
    },

    updateFeed({ getters }, { feedIndex, feed }) {
      if(getters.isLoggedIn) {
        axios({
          url: joojooclub.feed.valid(),
          method: 'put',
          headers: getters.authHeader,
          data: { feedIndex, ...feed },
        })
        .then(() => {
          router.push({
            name: 'profile',
            params: { userPK: getters.currentUser.memberIndex }
          })
        })
        .catch((err) => {
          console.log(err.response)
          router.push({
            name: 'profile',
            params: { userPK: getters.currentUser.memberIndex }
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
            alert('정상적으로 삭제되었습니다.')
            router.push({
              name: 'profile',
              params: { userPK: getters.currentUser.memberIndex }
            })
          })
          .catch((err) => {
            console.log(err.response)
            router.push({
              name: 'profile',
              params: { userPK: getters.currentUser.memberIndex }
            })
          })
        }
      }  
    },

    likeFeed({ getters }, feedIndex) {
      if(getters.isLoggedIn) {
        axios({
          url: joojooclub.feed.like(),
          method: 'post',
          headers: getters.authHeader,
          data: { feedIndex },
        })
        .then(() => {
          console.log('좋아요')
        })
      }
    },


  }
}