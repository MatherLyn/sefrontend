import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    offline: true,
    name: '请登录',
    pwd: ''
  }
  
})