<template>
  <div>
    <div class="my-icon">
      <div class="icon-name">
        <div class="icon-circle">
          <img class="icon" src="@/assets/dino.jpg" alt="">
        </div>
        <p class="my-icon-name">零件销售管理系统</p>
      </div>
    </div>
    <el-col :span="12">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#293046"
        text-color="#fff"
      >
        <el-menu-item
          :class="{'activated': active === 1}"
          @click="handleClick(1)"
        >
          <i class="el-icon-monitor"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item
          :class="{'activated': active === 2}"
          @click="handleClick(2)"
        >
          <i class="el-icon-data-line"></i>
          <span slot="title">客户数据</span>
        </el-menu-item>
        <el-menu-item
          :class="{'activated': active === 3}"
          @click="handleClick(3)"
        >
          <i class="el-icon-goods"></i>
          <span slot="title">产品列表</span>
        </el-menu-item>
        <el-menu-item
          :class="{'activated': active === 4}"
          @click="handleClick(4)"
        >
          <i class="el-icon-coin"></i>
          <span slot="title">订单管理</span>
        </el-menu-item>
        <el-menu-item
          :class="{'activated': active === 5}"
          @click="handleClick(5)"
        >
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
import Router from "vue-router";
export default {
  data() {
    return {
      active: 1
    }
  },
  methods: {
    handleClick (index) {
      this.active = index
      console.log(this.active)
      switch (index) {
        case 1: {
          this.$router.push({name: 'Home'})
          break
        }
        case 2: {
          this.$router.push({name: 'ClientStat'})
          break
        }
        case 3: {
          this.$router.push({name: 'ProductList'})
          break
        }
        case 4: {
          this.$router.push({name: 'OrderManagement'})
          break
        }
        case 5: {
          this.$router.push({name: 'Settings'})
          break
        }
      }
    }

  }
};
</script>

<style scoped>
  .my-icon {
    width: 100%;
    padding: 1.5rem   1rem;
    box-sizing: border-box;
    background-color: #293046;
  }
  
  .my-icon-name {
    color: #fff;
    line-height: 4rem;
    font-size: 1.5rem;
    margin: 0 0 0 2rem;
    letter-spacing: .2rem;
    text-decoration: none;
  }

  .icon-name {
    display: flex;
  }

  .icon-circle {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .icon {
    width: 100%;
    height: 100%;
  }

  .activated {
    color: #ffd04b !important;
  }
</style>