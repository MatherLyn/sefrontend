<template>
  <div class="register-page">
    <div class="register">
      <Badge />
      <div class="unit">
        <label for="name">用户名：</label>
        <el-input placeholder="请输入用户名" v-model="userInfo.name" clearable id="name"></el-input>
      </div>
      <div class="unit">
        <label for="pwd">密码：</label>
        <el-input placeholder="请输入密码" v-model="userInfo.pwd" show-password id="pwd"></el-input>
      </div>
      <div class="unit">
        <label for="tel">手机号：</label>
        <el-input placeholder="请输入手机号" v-model="userInfo.tel" clearable id="tel"></el-input>
      </div>
      <div class="unit">
        <router-link :to="{path: '/login'}" class="unit-router">返回登录</router-link>
        <router-link :to="{path: '/modifyPwd'}" class="unit-router">找回密码</router-link>
      </div>
      <div class="unit" v-show="msg">
        <p class="error-message">{{msg}}</p>
      </div>
      <div class="unit">
        <el-button
          type="primary"
          class="submit-btn"
          id="submitButton"
          @click="doRegister"
          :disabled="!(userInfo.name && userInfo.tel && userInfo.pwd)"
        >
          确认注册
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from './parts/Badge'
import Router from 'vue-router'
export default {
  data() {
    return {
      userInfo: {
        name: '',
        tel: '',
        pwd: '',
      },
      msg: ''
    }
  },
  methods: {
    doRegister () {
      this.axios.post('/api/user/register', this.userInfo)
      .then(response => {
        const responseData = response.data
        // code为零表示异常
        if (!responseData.code) {
          this.msg = responseData.msg
          return
        }
        this.msg = ''
        // 给提示，0.5秒后跳转到登录页面
        setTimeout(() => {
          this.$router.push({name: 'Login', params: {name: this.userInfo.name, pwd: this.userInfo.pwd}})
        }, 500);
      })
    }
  },
  created() {
    const submitButton = document.querySelector('#submitButton')
    document.onkeydown = (e) => {
      e = e || window.event
      if (e.keyCode === 13 && this.userInfo.name && this.userInfo.pwd) {
        this.doRegister()
      }
    }
  },
  components: {
    Badge
  }
}
</script>

<style>
  .register-page {
    position: relative;
    height: calc(100vh - 5rem);
  }

  .register {
    position: relative;
    top: 50%;
    width: 50rem;
    padding: 4rem;
    margin: -29rem auto;
    border: 2px solid #E4E7ED;
    border-radius: 4px;
    background-color: #fff;
    box-sizing: border-box;
  }
</style>