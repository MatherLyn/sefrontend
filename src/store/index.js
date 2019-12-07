import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    offline: true,
    name: '请登录',
    pwd: '',
    active: 0,
    tableData: [
      {
        rank: 1,
        name: '广东省广州市荔湾区荔湾路360号',
        sales: '362,999'
      },
      {
        rank: 2,
        name: '广东省广州市荔湾区荔湾路360号',
        sales: '362,888'
      },
      {
        rank: 3,
        name: '广东省广州市荔湾区荔湾路360号',
        sales: '362,777'
      },
      {
        rank: 4,
        name: '广东省广州市荔湾区荔湾路360号',
        sales: '258,222'
      },
      {
        rank: 5,
        name: '广东省广州市荔湾区荔湾路360号',
        sales: '128,127'
      },
      {
        rank: 6,
        name: '广东省广州市荔湾区荔湾路360号',
        sales: '127,001'
      },
      {
        rank: 7,
        name: '广东省广州市荔湾区荔湾路360号',
        sales: '125,125'
      }
    ],
    userList: [],
    productList: []
  }
  
})