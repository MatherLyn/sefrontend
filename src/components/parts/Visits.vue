<template>
  <div class="chart-body" id="visitTrendChart"></div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [900, 580, 370, 1100, 800, 400, 790, 1170, 620, 200, 1000, 1200],
      }
    },
    mounted () {
      this.initChart()
    },
    methods: {
      initChart () {
        const chart = this.$echarts.init(document.querySelector('#visitTrendChart'))
        chart.setOption({
          title: {
            text: '访问量趋势',
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize: '20px',
              fontWeight: 'normal'
            },
            top: '15px',
            left: '20px'
          },
          color: ['#3d9efd'],
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '3%',
            right: '3%',
            bottom: '0%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            type: 'value',
            splitLine: {
              lineStyle: {
                color: ['#e6e6e6'],
                type: 'dashed'
              }
            }
          },
          series: [{
            name: '销量',
            type: 'bar',
            barWidth: '40%',
            data: this.tableData
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
  .chart-body {
    width: 80rem;
    height: 35rem;
  }
</style>