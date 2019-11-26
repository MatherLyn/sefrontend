<template>
  <div class="home-page">
    <div class="analysis">
      <div class="concret-analysis">
          <Analysis
            v-for="(item, index) in analysisSections"
            :key="index"
            :index="index"
            :title="item.name"
            :tips="item.tips"
            :content="item.content"
            :rateTitle="item.rateTitle"
            :rate="item.rate"
            :data="item.data"
            :color="item.color"
            class="analysis-section"/>
      </div>
      <div class="general-analysis">
        <el-tabs v-model="activeName">
          <el-tab-pane label="销售量分析" name="sales">
            <Sales />
          </el-tab-pane>
          <el-tab-pane label="访问量分析" name="second">
            <Visits />
          </el-tab-pane>
          <div class="store-sales-ranking">
            <SalesRanking />
          </div>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import Analysis from './parts/Analysis'
  import Sales from './parts/Sales'
  import Visits from './parts/Visits'
  import SalesRanking from './parts/SalesRanking'
  export default {
    data () {
      return {
        activeName: 'sales',
        analysisSections: [
          {
            name: '总销售额',
            tips: '本月度销售总额，图为近七日销售总额的变化。',
            content: '¥ 126,560',
            rateTitle: '日销售额',
            rate: '¥ 12,423',
            data: [1640, 3977, 5687, 2345, 9008, 5421, 3562],
            color: 'rgb(195, 47, 85)'
          },
          {
            name: '访问量',
            tips: '本月度网站访问量，图为近七日访问量的变化。',
            content: '8,846',
            rateTitle: '日均访问量',
            rate: '295',
            data: [339, 252, 168, 270, 103, 122, 136],
            color: 'rgb(152, 99, 230)'
          },
          {
            name: '支付笔数',
            tips: '本月度用户购买成功支付的订单数，图为近七日支付笔数的变化，转化率的计算为成功订单与添加的订单的比值。',
            content: '6560',
            rateTitle: '转化率',
            rate: '60%',
            data: [452, 300, 219, 250, 222, 323, 178],
            color: 'rgb(30, 142, 243)'
          },
          {
            name: '运营活动效果',
            tips: '本月度运营活动效果，图为近七日运营活动数。',
            content: '78%',
            rateTitle: '周同比',
            rate: '上升 12%',
            data: [1, 3, 5, 7, 9, 11, 13],
            color: 'rgb(20, 200, 200)'
          }
        ]
      }
    },
    components: {
      Sales,
      Analysis,
      Visits,
      SalesRanking
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
    margin: 0 auto;
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
    margin: 0 2rem 2rem;
    background-color: #fff;
    overflow: hidden;
    padding-bottom: 0;
  }

  .store-sales-ranking {
    width: 38rem;
    box-sizing: border-box;
    padding: 2rem;
  }
</style>