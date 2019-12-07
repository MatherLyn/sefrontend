<template>
  <div class="login-page">
    <div class="login">
      <Badge />
      <div class="unit">
        <label for="name">用户名：</label>
        <el-input placeholder="请输入用户名" v-model="userInfo.name" clearable id="name" maxlength="20"></el-input>
      </div>
      <div class="unit">
        <label for="pwd">密码：</label>
        <el-input placeholder="请输入密码" v-model="userInfo.pwd" show-password id="pwd" maxlength="20"></el-input>
      </div>
      <div class="unit">
        <router-link :to="{path: '/register'}" class="unit-router">注册一个账号</router-link>
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
          @click="doLogin"
          :disabled="!(userInfo.name && userInfo.pwd)"
        >
          确认登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Global from '@/Global'
  import Badge from './parts/Badge'
  export default {
    data() {
      return {
        userInfo: {
          name: '',
          pwd: ''
        },
        msg: ''
      }
    },
    methods: {
      doLogin() {
        this.axios.post('/api/user/login', this.userInfo)
        .then(response => {
          const responseData = response.data
          if (!responseData.code) {
            this.msg = responseData.msg
            return
          }
          this.msg = ''
          // 给提示，0.5秒后跳转到首页
          setTimeout(() => {
            this.$store.state.offline = false
            this.$store.state.name = this.userInfo.name
            this.$router.push({name: 'Home', params: {name: this.userInfo.name}})
            this.$store.state.active = 1
          }, 500);
        })
      },
    },
    created() {
      // 为submit button添加回车事件
      const submitButton = document.querySelector('#submitButton')
      document.onkeydown = (e) => {
        e = e || window.event
        if (e.keyCode === 13 && this.userInfo.name && this.userInfo.pwd) {
          this.doLogin()
        }
      }
      // 如果Login是从Register来的，那么接收他的两个参数
      const name = this.$route.params.name
      const pwd = this.$route.params.pwd
      if (name) {
        this.userInfo.name = name
      }
      if (pwd) {
        this.userInfo.pwd = pwd
      }
    },
    components: {
      Badge
    }
  }
</script>

<style scoped>
  .login-page {
    position: relative;
    height: calc(100vh - 5rem);
  }

  .login {
    position: relative;
    top: 50%;
    width: 50rem;
    padding: 4rem;
    margin: -25rem auto;
    border: 2px solid #E4E7ED;
    border-radius: 4px;
    background-color: #fff;
    box-sizing: border-box;
  }
</style>