<template>
  <div class="user-list-page">
    <div class="user-list">
      <ListHeader :sectionName="'客户数据'" @getPopupState="showPopupState"/>
      <div class="title">
        <el-dropdown @command="handleCommand">
          <el-button type="primary">
            {{curCheck}}<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="id">编号</el-dropdown-item>
            <el-dropdown-item command="name">用户名</el-dropdown-item>
            <el-dropdown-item command="tel">手机号</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-input
          placeholder="请输入想要查找的键名"
          v-model="checkValue"
          label="用户名"
          clearable
          class="username-input">
        </el-input>
        <el-button type="primary" icon="el-icon-search" @click="doFilter">查找</el-button>
      </div>
      <el-table
       :data="showData"
       :stripe="true" 
       style="width: 100%">
        <el-table-column fixed="left" prop="id" label="编号"></el-table-column>
        <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column prop="pwd" label="密码"></el-table-column>
        <el-table-column prop="tel" label="手机号"></el-table-column>
        <el-table-column fixed="right" prop="manipulation" label="操作">
          <template slot-scope="scope">
            <el-button @click="checkItem(scope.row)" type="text" size="small">查看</el-button>
            <el-button @click="modifyItem(scope.row)" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="10"
        layout="sizes, prev, pager, next"
        :total="tableData.length"
      ></el-pagination>
    </div>
    <ListPopup v-show="showPopup" @popupClose="closePopup" :type="0" @updateList="updateTable"/>
  </div>
</template>

<script>
import ListHeader from './parts/ListHeader'
import ListPopup from './parts/ListPopup'
export default {
  data() {
    return {
      curCheck: '编号',
      check: 'id',
      checkValue: '',
      search: '',
      tableData: [],
      showData: [],
      popup: false,
      showId: '',
      showName: '',
      showPwd: '',
      showTel: '',
      showMsg: '',
      curSize: 10,
      curPage: 1,
      filtering: false,
      showPopup: false,
      User: {
        id: "",
        name: "",
        pwd: "",
        tel: ""
      }
    }
  },
  methods: {
    handleCommand (command) {
      switch (command) {
        case 'id': {
          this.curCheck = '编号'
          break;
        }
        case 'name': {
          this.curCheck = '用户名'
          break;
        }
        case 'tel': {
          this.curCheck = '手机号'
          break;
        }
      }
      this.check = command
    },
    doFilter () {
      this.handleCurrentChange(this.curPage)
      this.filtering = true
      this.search = this.checkValue
      if (!this.search) {
        this.filtering = false
        return
      }
      this.showData = this.tableData.filter(item => {
        return item[this.check].toString().toLowerCase().includes(this.search.toString().toLowerCase())
      })
      this.filtering = true
    },
    checkItem (row) {
      const id = parseInt(row.id);
      this.axios.get(`/api/user/check?id=${id}`).then(response => {
        const responseData = response.data;
        if (!responseData.code) {
          this.showMsg = responseData.status;
          return;
        }
        this.showMsg = "";
        this.showId = responseData.id;
        this.showName = responseData.name;
        this.showPwd = responseData.pwd;
        this.showTel = responseData.tel;
        this.popup = true;
      });
    },
    modifyItem (row) {
      // this.workPiece.id = parseInt(row.id)
      // this.workPiece.type = row.type
      // this.workPiece.model = row.model
      // this.workPiece.stock = parseInt(row.stock)
      // console.log(this.workPiece)
      // this.axios.post('/api/workpiece/append', this.workPiece)
      // .then(response => {
      //   console.log(response)
      // })
    },
    handleSizeChange (val) {
      this.curSize = val
      const start = (this.curPage - 1) * val
      this.showData = this.tableData.slice(start, start + val)
    },
    handleCurrentChange (val) {
      this.curPage = val
      const start = (val - 1) * this.curSize
      this.showData = this.tableData.slice(start, start + this.curSize)
    },
    showPopupState () {
      this.showPopup = true
    },
    closePopup () {
      this.showPopup = false
    },
    updateTable () {
      this.tableData = this.$store.state.userList
    }
  },
  computed: {
    length () {
      if (this.filtering) return this.showData.length
      return this.tableData.length
    }
  },
  mounted() {
    if (this.$store.state.userList.length) {
      this.tableData = this.$store.state.userList
      if (this.tableData.length < 10) {
        // 若已不足10条记录，则全部展示
        this.showData = this.tableData
      } else {
        // 若比10条记录多，则选前10条进行展示
        this.showData = this.tableData.slice(0, 10);
      }
    } else {
      this.axios.get("/api/user/list").then(response => {
        console.log(response);
        if (!response.data.code) {
          alert(response.data.status);
          return;
        }
        this.$store.state.userList = response.data.data
        this.tableData = response.data.data
        if (this.tableData.length < 10) {
          // 若已不足10条记录，则全部展示
          this.showData = this.tableData
        } else {
          // 若比10条记录多，则选前10条进行展示
          this.showData = this.tableData.slice(0, 10);
        }
      })
    }
  },
  components: {
    ListHeader,
    ListPopup
  }
}
</script>

<style scoped>
.user-list-page {
  padding: 2rem;
}

.user-list {
  background-color: #fff;
  padding: 2rem;
}

.title {
  display: flex;
  margin-bottom: 2rem;
}

.username-input {
  margin: 0 2rem;
}
</style>