import Vue from 'vue'
import Vuex from 'vuex'

import feed from '@/store/modules/feed'
import drinks from '@/store/modules/drinks'
import accounts from '@/store/modules/accounts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    feed,
    drinks,
    accounts,
  }
})
