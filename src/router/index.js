import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Register from '@/components/Register'
import ModifyPwd from '@/components/ModifyPwd'
import Home from '@/components/Home'
import ClientStat from '@/components/ClientStat'
import ProductList from '@/components/ProductList'
import OrderManagement from '@/components/OrderManagement'
import Settings from '@/components/Settings'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/index',
      redirect: '/login'
    },
    {
      path: '/index.html',
      redirect: '/login'
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/modifyPwd',
      name: 'ModifyPwd',
      component: ModifyPwd
    },
    {
      path: '/home',
      name: 'Home',
      meta: {
        requireAuth: true
      },
      component: Home
    },
    {
      path: '/clientStat',
      name: 'ClientStat',
      meta: {
        requireAuth: true
      },
      component: ClientStat
    },
    {
      path: '/productList',
      name: 'ProductList',
      meta: {
        requireAuth: true
      },
      component: ProductList
    },
    {
      path: '/orderManagement',
      name: 'OrderManagement',
      meta: {
        requireAuth: true
      },
      component: OrderManagement
    },
    {
      path: '/settings',
      name: 'Settings',
      meta: {
        requireAuth: true
      },
      component: Settings
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(store.state.offline)
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (!store.state.offline) {  // 通过vuex state获取当前的token是否存在
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.path}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})

export default router