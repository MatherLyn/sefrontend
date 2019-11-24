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
        prop="quantity"
        label="库存">
      </el-table-column>
      <el-table-column
        fixed="right"
        prop="manipulation"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [
          {
            id: '001',
            type: 'screw',
            model: 'screw-1',
            quantity: '100'
          },
          {
            id: '002',
            type: 'screw',
            model: 'screw-2',
            quantity: '200'
          },
          {
            id: '003',
            type: 'screw',
            model: 'screw-3',
            quantity: '455'
          },
          {
            id: '004',
            type: 'screw',
            model: 'screw-4',
            quantity: '322'
          },
          {
            id: '005',
            type: 'screw',
            model: 'screw-5',
            quantity: '800'
          },
          {
            id: '006',
            type: 'nut',
            model: 'nut-1',
            quantity: '200'
          },
          {
            id: '007',
            type: 'nut',
            model: 'nut-2',
            quantity: '544'
          },
          {
            id: '008',
            type: 'nut',
            model: 'nut-3',
            quantity: '899'
          },
          {
            id: '009',
            type: 'nut',
            model: 'nut-4',
            quantity: '655'
          },
          {
            id: '010',
            type: 'gear',
            model: 'gear-1',
            quantity: '447'
          },
          {
            id: '011',
            type: 'gear',
            model: 'gear-2',
            quantity: '800'
          },
          {
            id: '012',
            type: 'gear',
            model: 'gear-3',
            quantity: '122'
          },
          {
            id: '013',
            type: 'gear',
            model: 'gear-4',
            quantity: '644'
          },
          {
            id: '014',
            type: 'gear',
            model: 'gear-5',
            quantity: '676'
          },
          {
            id: '015',
            type: 'gear',
            model: 'gear-6',
            quantity: '455'
          },
        ]
      }
    },
    methods: {
      filterType (value, row, column) {
        const property = column['property']
        return row[property] === value
      }
    }
  }
</script>

<style scoped>
  .product-list-page {
    padding: 2rem;
  }
</style>