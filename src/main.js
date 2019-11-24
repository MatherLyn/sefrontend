// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 引入 element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入 axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// 引入echarts
import echarts from 'echarts'


// 使用element
Vue.use(ElementUI)
// 使用axios
Vue.use(VueAxios, axios)
axios.defaults.baseURL='http://localhost:8081'
// 挂载echarts
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
