<template>
  <div class="product-list-page">
    <div class="product-list">
      <ListHeader :sectionName="'产品列表'" @getPopupState="showPopupState"/>
      <div class="title">
        <el-dropdown @command="handleCommand">
          <el-button type="primary">
            {{curCheck}}<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="id">编号</el-dropdown-item>
            <el-dropdown-item command="type">种类</el-dropdown-item>
            <el-dropdown-item command="model">型号</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-input
          placeholder="请输入想要查找的键名"
          v-model="checkValue"
          label="型号"
          clearable
          class="product-input">
        </el-input>
        <el-button type="primary" icon="el-icon-search" @click="doFilter">查找</el-button>
      </div>
      <el-table
        :data="showData"
        :stripe="true"
        style="width: 100%">
        <el-table-column
          fixed="left"
          prop="id"
          label="编号">
        </el-table-column>
        <el-table-column
          prop="type"
          label="种类"
          :filters="[{text: 'screw', value: 'screw'},{text: 'nut', value: 'nut'},{text: 'gear', value: 'gear'}]"
          :filter-method="filterType">
        </el-table-column>
        <el-table-column
          prop="model"
          label="型号">
        </el-table-column>
        <el-table-column
          prop="stock"
          label="库存">
        </el-table-column>
        <el-table-column
          fixed="right"
          prop="manipulation"
          label="操作">
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
        :total="length"
      ></el-pagination>
    </div>
    <ListPopup v-show="showPopup" @popupClose="closePopup" />
  </div>
</template>

<script>
  import ListHeader from './parts/ListHeader'
  import ListPopup from './parts/ListPopup'
  export default {
    data () {
      return {
        curCheck: '编号',
        check: 'id',
        checkValue: '',
        search: '',
        tableData: [],
        showData: [],
        popup: false,
        showId: '',
        showType: '',
        showModel: '',
        showStock: '',
        showMsg: '',
        curSize: 10,
        curPage: 1,
        filtering: false,
        showPopup: false,
        workPiece: {
          id: '',
          type: '',
          model: '',
          stock: '',
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
          case 'type': {
            this.curCheck = '种类'
            break;
          }
          case 'model': {
            this.curCheck = '型号'
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
      filterType (value, row, column) {
        const property = column['property']
        return row[property] === value
      },
      checkItem (row) {
        const id = parseInt(row.id)
        this.axios.get(`/api/workpiece/check?id=${id}`)
        .then(response => {
          const responseData = response.data
          if (!responseData.code) {
            this.showMsg = responseData.status
            return
          }
          this.showMsg = ''
          this.showId = responseData.id
          this.showType = responseData.type
          this.showModel = responseData.model
          this.showStock = responseData.stock
          this.popup = true
        })
      },
      modifyItem (row) {
        this.workPiece.id = parseInt(row.id)
        this.workPiece.type = row.type
        this.workPiece.model = row.model
        this.workPiece.stock = parseInt(row.stock)
        console.log(this.workPiece)
        this.axios.post('/api/workpiece/append', this.workPiece)
        .then(response => {
          console.log(response)
        })
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
      }
    },
    computed: {
      length () {
        if (this.filtering) return this.showData.length
        return this.tableData.length
      }
    },
    mounted () {
      this.axios.get('/api/workpiece/list')
      .then(response => {
        if (!response.data.code) {
          alert(response.data.staus)
          return
        }
        this.tableData = response.data.data
        if (this.tableData.length < 10) {
          // 若已不足10条记录，则全部展示
          this.showData = this.tableData
        } else {
          // 若比10条记录多，则选前10条进行展示
          this.showData = this.tableData.slice(0, 10);
        }
      })
    },
    components: {
      ListHeader,
      ListPopup
    }
  }
</script>

<style scoped>
  .product-list-page {
    padding: 2rem;
  }

  .product-list {
    background-color: #fff;
    padding: 2rem;
  }

  .title {
    display: flex;
    margin-bottom: 2rem;
  }

  .product-input {
    margin: 0 2rem;
  }
</style>