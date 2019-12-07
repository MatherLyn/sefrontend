<template>
  <div class="analysis">
    <div class="header">
      <span class="title">{{title}}</span>
      <img src="../../assets/tips.png" alt="" class="tips" :title="tips">
    </div>
    <div class="content">
      <div class="content-main">{{content}}</div>
      <div class="content-chart" :id="`contentChart${index}`"></div>
    </div>
    <div class="rate">
      <span class="rate-title">{{rateTitle}}</span>
      <span class="rate-content">{{rate}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.initChart()
    },
    props: [
      'index',
      'title',
      'tips',
      'content',
      'rateTitle',
      'rate',
      'data',
      'color'
    ],
    data () {
      return {

      }
    },
    methods: {
      initChart () {
        const chart = this.$echarts.init(document.querySelector(`#contentChart${this.index}`))
        chart.setOption({
          grid: {
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            containLabel: false
          },
          tooltip: {

          },
          xAxis: {
            type: 'category',
            show: false,
            data: [1, 2, 3, 4 ,5 ,6, 7]
          },
          yAxis: {
            type: 'value',
            show: false,
            // data: [this.data[0],
            // this.data[0] + 1000,
            // this.data[0] + 2000,
            // this.data[0] + 3000,
            // this.data[0] + 4000,
            // this.data[0] + 5000,
            // this.data[0] + 6000]
          },
          series: [{
            data: this.data,
            type: 'line',
            areaStyle: {
              color: `${this.color}`
            },
            itemStyle: {
              color: `${this.color}`
            },
            smooth: true,
            symbol: 'none',
          }]
        })
        window.addEventListener('resize', () => {
          chart.resize() 
        })
      }
    }
  }
</script>

<style scoped>
  .analysis {
    width: 100%;
  }

  .header {
    line-height: 2rem;
    height: 2rem;
  }

  .title {
    color: #aaa;
    font-size: 1.6rem;
    letter-spacing: .1rem;
    float: left;
  }

  .tips {
    width: 1.6rem;
    height: 1.6rem;
    float: right;
  }

  .tips:hover {
    cursor: pointer;
  }

  .content {
    box-sizing: border-box;
    padding-top: 1rem;
    font-family: 'Microsoft YaHei UI';
  }

  .content-main {
    height: 3rem;
    line-height: 3rem;
    font-size: 3rem;
    text-align: left;
  }

  .content-chart {
    height: 13rem;
    box-sizing: border-box;
    padding: 1rem 0;
  }

  .rate {
    padding-top: 1rem;
    border-top: .1rem solid #ddd;
    font-size: 1.4rem;
    line-height: 1.9rem;
    overflow: hidden;
    box-sizing: border-box;
  }

  .rate-title {
    margin-right: 1.4rem;
    float: left;
  }

  .rate-content {
    float: left;
  }
</style>