<template>
  <div class="popup" @click="popupClose">
    <div class="popup-form" @click="stopCapturing">
      <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable>
      </el-input>
      <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable>
      </el-input>
      <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable>
      </el-input>
    </div>
  </div>
</template>

<script>
  export default {
    props: [

    ],
    data () {
      return {
        
      }
    },
    methods: {
      popupClose () {
        this.$emit('popupClose')
        document.body.style.overflow = 'auto'
        console.log('closed')
      },
      stopCapturing () {
        event.stopImmediatePropagation()
      }
    }
  }
</script>

<style scoped>
  .popup {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: #00000050;
    left: 0;
    top: 0;
    z-index: 6;
  }

  .popup-form {
    width: 45rem;
    height: 60rem;
    position: relative;
    top: 50%;
    margin: -30rem auto 0;
    background-color: #fff;
    border-radius: .5rem;
    padding: 2rem;
  }
</style>