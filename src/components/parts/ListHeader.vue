<template>
  <div class="list-header">
    <div class="header-title">
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item>零件销售管理系统</el-breadcrumb-item>
        <el-breadcrumb-item>{{sectionName}}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button type="primary" class="add-new-btn" @click="addNewItem">新增</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'sectionName'
    ],
    data () {
      return {
      }
    },
    methods: {
      addNewItem () {
        this.$emit('getPopupState')
        document.body.style.overflow = 'hidden'
      }
    }
  }
</script>

<style scoped>
  .list-header {
    margin-bottom: 2rem;
  }

  .header-title {
    display: flex;
  }

  .breadcrumb {
    width: 100%;
    line-height: 4rem;
  }

  .add-new-btn {
    width: 8rem;
  }
</style>