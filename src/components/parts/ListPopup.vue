<template>
  <div class="popup">
    <div class="popup-form" @click="stopCapturing">
      <div class="close"><el-button icon="el-icon-close" circle class="close-btn" @click="popupClose"></el-button></div>
      <div class="header">新增{{ type? '产品': '用户'}}</div>
      <div class="unit">
        <label for="1">{{ type? '产品种类': '用户名' }}</label>
        <el-input
          placeholder="请输入内容"
          v-model="requestBody.input1"
          clearable
          id="1">
        </el-input>
      </div>
      <div class="unit">
        <label for="2">{{ type? '产品型号': '密码' }}</label>
        <el-input
          :type="type? 'text': 'password'"
          placeholder="请输入内容"
          v-model="requestBody.input2"
          clearable
          id="2">
        </el-input>
      </div>
      <div class="unit">
        <label for="3">{{ type? '新增量（填入负数将会减少库存）': '手机号' }}</label>
        <el-input
          placeholder="请输入内容"
          v-model="requestBody.input3"
          clearable
          id="3">
        </el-input>
      </div>
      <div class="msg" :class="{'error': error}" v-show="msg">{{msg}}</div>
      <div class="unit">
        <el-button type="primary" class="submit-btn" @click="submit">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'type'
    ],
    data () {
      return {
        msg: '',
        error: false,
        requestBody: {
          input1: '',
          input2: '',
          input3: ''
        },
        workPiece: {
          type: '',
          model: '',
          stock: '',
        },
        User: {
          name: "",
          pwd: "",
          tel: ""
        }
      }
    },
    methods: {
      popupClose () {
        this.$emit('popupClose')
        document.body.style.overflow = 'auto'
      },
      stopCapturing () {
        // 防止点击form表单时事件冒泡触发关闭
        event.stopImmediatePropagation()
      },
      submit () {
        if (this.type) {
          this.workPiece.type = this.requestBody.input1
          this.workPiece.model = this.requestBody.input2
          this.workPiece.stock = this.requestBody.input3
          this.axios.post('/api/workpiece/append', this.workPiece)
          .then(response => {
            if (response.data.code) {
              this.error = false
            } else {
              this.error = true
            }
            this.axios.get('/api/workpiece/list')
            .then(res => {
              this.$store.state.productList = res.data.data
              this.$emit('updateList')
            })
            this.msg = response.data.status
          })
        } else {
          this.User.name = this.requestBody.input1
          this.User.pwd = this.requestBody.input2
          this.User.tel = this.requestBody.input3
          this.axios.post('/api/user/append', this.User)
          .then(response => {
            this.msg = response.data.status
            if (response.data.code) {
              this.error = false
              this.axios.get('/api/user/list')
              .then(res => {
                this.$store.state.userList = res.data.data
                this.$emit('updateList')
              })
            } else {
              this.error = true
            }
            this.msg = response.data.status
          })
        }
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .popup-form {
    width: 45rem;
    background-color: #fff;
    border-radius: .5rem;
    padding: 3rem;
    box-sizing: border-box;
  }

  .close {
    display: flex;
    flex-direction: row-reverse;
  }

  .close-btn {
    width: 2rem;
    height: 2rem;
    padding: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header {
    font-size: 2rem;
    color: #333;
  }

  .msg {
    font-size: 1.4rem;
    margin-bottom: -2rem;
    color: #333;
  }

  .error {
    color: red;
  }

  .submit-btn {
    margin-top: 3rem;
    width: 100%;
  }
</style>