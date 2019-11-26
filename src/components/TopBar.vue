<template>
  <div>
    <div class="user-info" @click="doLoginOrLogout">
      <div class="user-icon">
        <img :src="userIcon" alt="头像" class="icon-img">
      </div>
      <div class="user-name">{{this.$store.state.name}}</div>
    </div>
  </div>
</template>

<script>
  import Router from 'vue-router'
  export default {
    data () {
      return {
        userIcon: require('../assets/user.png')
      }
    },
    methods: {
      doLoginOrLogout () {
        if (this.$store.state.offline) {
          this.$router.push({name: 'Login'})
          return
        }
        this.doLogout()
      },
      // 未完成
      doLogout () {
        if(confirm('确定注销吗？')) {
          // 执行注销
          alert('您已注销成功')
          this.$store.state.offline = true
          this.$store.state.name = '请登录'
          this.$store.state.active = 0
          this.$router.push({name: 'Login'})
        } else {
          // 保持
          alert('保持登录状态')
        }
      }
    },
  }
</script>

<style scoped>
  .user-info {
    position: relative;
    float: right;
    right: 4rem;
    display: flex;
  }

  .user-icon {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;
    box-sizing: border-box;
    border: .1rem solid rgba(0, 0, 0, .4);
  }

  .user-info:hover {
    cursor: pointer;
  }

  .icon-img {
    width: 2.8rem;
    height: 2.8rem;
  }

  .user-name {
    margin-left: 1.5rem;
    font-size: 1.2rem;
  }
</style>