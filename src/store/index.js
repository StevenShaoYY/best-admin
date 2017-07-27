/**
 * Created by shaojunyan on 2017-7-26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import user from './modules/user'
import permission from './modules/permission'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
    user,
    permission
  },
  // strict: debug,
  plugins: debug ? [createLogger()] : []
})
