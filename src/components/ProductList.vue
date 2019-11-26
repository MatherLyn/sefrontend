<template>
  <div class="product-list-page">
    <el-table
      :data="tableData"
      :stripe="true"
      height="calc(100vh - 9rem)"
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
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [],
        popup: false,
        showId: '',
        showType: '',
        showModel: '',
        showStock: '',
        showMsg: '',
        workPiece: {
          id: '',
          type: '',
          model: '',
          stock: '',
        }
      }
    },
    methods: {
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
      })
    }
  }
</script>

<style scoped>
  .product-list-page {
    padding: 2rem;
  }
</style>