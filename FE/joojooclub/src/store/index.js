import Vue from 'vue'
import Vuex from 'vuex'

import feed from '@/store/modules/feed'
import drinks from '@/store/modules/drinks'
import accounts from '@/store/modules/accounts'
import createPersistedState from "vuex-persistedstate"


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    feed,
    drinks,
    accounts,
  },
  plugins: [
    createPersistedState({
      paths: ['drinks.recommend'],
      storage: window.sessionStorage,
    })
  ]
})
