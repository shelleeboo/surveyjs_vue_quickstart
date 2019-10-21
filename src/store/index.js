import Vue from 'vue'
import Vuex from 'vuex'

import viewer from './modules/viewer'
import creator from './modules/creator'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    viewer,
    creator
  }
})
