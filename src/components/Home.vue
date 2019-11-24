<template>
  <div class="home-page">
    <div class="analysis">
      <div class="concret-analysis">
        <div class="analysis-section">
          <Analysis />
        </div>
        <div class="analysis-section">
          <Analysis />
        </div>
        <div class="analysis-section">
          <Analysis />
        </div>
        <div class="analysis-section">
          <Analysis />
        </div>
      </div>
      <div class="general-analysis">
        <el-tabs v-model="activeName">
          <el-tab-pane label="销售量分析" name="sales">
            <Sales />
          </el-tab-pane>
          <el-tab-pane label="访问量分析" name="second">
          </el-tab-pane>
          <div class="store-sales-ranking">
            <h1>123</h1>
          </div>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import Analysis from './parts/Analysis'
  import Sales from './parts/Sales'
  export default {
    data () {
      return {
        activeName: 'sales'
      }
    },
    components: {
      Sales,
      Analysis
    }
  }
</script>



<style scoped>
  .home-page {
    box-sizing: border-box;
    width: 130rem;
  }

  .analysis {
    width: fit-content;
    margin: auto;
  }

  .concret-analysis {
    width: 100%;
    display: flex;
    padding: 2rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .analysis-section {
    width: 25%;
    box-sizing: border-box;
    padding: 2rem;
    background-color: #fff;
    margin: 0 2rem;
  }

  .analysis-section:nth-child(1) {
    margin-left: 0;
  }

  .analysis-section:nth-child(4) {
    margin-right: 0;
  }

  .general-analysis {
    box-sizing: border-box;
    width: calc(100% - 4rem);
    padding: 2rem;
    margin: 0 2rem;
    background-color: #fff;
    overflow: hidden;
  }

  .store-sales-ranking {
    width: 38rem;
    box-sizing: border-box;
    padding: 2rem;
  }
</style>