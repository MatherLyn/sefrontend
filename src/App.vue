<template>
  <div id="app">
    <TopBar class="top-bar" />
    <LeftNavMenu class="left-bar" />
    <router-view class="main-view"/>
  </div>
</template>

<script>
  import TopBar from './components/TopBar'
  import LeftNavMenu from './components/LeftNavMenu'
  export default {
    name: 'App',
    components: {
      TopBar,
      LeftNavMenu
    },
    mounted () {

    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .clearfix {
    overflow: hidden;
  }

  html {
    font-size: 10px;
    border-top: .1px solid transparent;
  }

  body {
    margin: 0;
    background-color: rgb(241, 242, 246);
    box-sizing: border-box;
  }

  a {
    text-decoration: underline;
    color: #000;
  }

  ul {
    list-style-type: none;
  }

  label {
    width: 100%;
    display: block;
    font-size: 16px;
    text-align: left;
    margin-bottom: .5rem;
  }

  ::-webkit-input-placeholder {
    font-size: 14px;
    color: rgba(163, 163, 163, 0.548)
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .left-bar {
    width: 24rem;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
  }
  
  .top-bar {
    width: calc(100vw - 24rem);
    line-height: 3rem;
    position: fixed;
    top: 0;
    right: 0;
    padding: 1rem 0;
    background: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, .1);
    z-index: 4;
    opacity: .8;
    transition: .2s;
  }

  .top-bar:hover {
    opacity: 1;
  }

  .main-view {
    margin-top: 5rem;
    margin-left: 24rem;
    z-index: 0;
    border-top: .1px solid transparent;
  }

  .el-col {
    width: 100% !important;
    height: 100%;
    float: none;
  }
  
  .el-menu {
    border-right-width: 0 !important;
    height: 100%;
    border: none;
    text-align: left;
    overflow-x: hidden;
  }

  .el-menu li {
    padding: 0;
  }

  .el-menu-item-group__title {
    padding-left: 0 !important;
  }

  .el-submenu__title {
    padding: 0 !important;
  }

  .el-button--primary {
    background-color: rgb(102, 177, 255);
  }

  .el-button--primary:hover {
    background-color: rgb(83, 168, 255);
  }

  .el-input__inner:focus {
    background-color: #F2F6FC;
  }

  .unit {
    overflow: hidden;
    margin: 2rem 0;
  }

  .unit-router {
    font-size: 1.4rem;
  }

  .unit-router:nth-child(1) {
    float: left;
  }

  .unit-router:nth-child(2) {
    float: right;
  }

  .unit-router:hover {
    color: rgb(83, 168, 255);
  }

  .error-message {
    color: #FF0000;
    font-size: 1.2rem;
  }

  .submit-btn {
    width: 100%;
  }

  .el-tabs__content {
    display: flex;
  }

  .el-pagination {
    text-align: right;
    padding-top: 2rem !important;
  }

  .el-table__body-wrapper {
    border-bottom: none !important;
  }
</style>
