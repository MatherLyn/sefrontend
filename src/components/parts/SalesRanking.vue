<template>
  <div class="sales-ranking">
    <p class="ranking-header">门店销售排名</p>
    <ul class="ranking-list">
      <li v-for="item in tableData" :key="item.rank" class="ranking-body">
        <div class="rank">
          <div class="ranking">{{item.rank}}</div>
        </div>
        <p class="rank-name">{{ item.name }}</p>
        <p class="rank-statistics">{{ item.sales }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData : this.$store.state.tableData
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .sales-ranking {
    width: 38rem;
    height: 35rem;
  }

  .ranking-header {
    padding: 1rem;
    line-height: 2rem;
    font-size: 1.4rem;
    text-align: left;
  }

  .ranking-list {
    width: 34rem;
    height: 31rem;
  }

  .ranking-body {
    padding: .6rem;
    line-height: 3.2rem;
    display: flex;
  }

  .ranking-body:nth-child(1) > div > div{
    background-color: #30485a;
    color: #f6f6f6;
  }

  .ranking-body:nth-child(2) > div > div{
    background-color: #30485a;
    color: #f6f6f6;
  }

  .ranking-body:nth-child(3) > div > div{
    background-color: #30485a;
    color: #f6f6f6;
  }

  .rank {
    width: 13%;
  }

  .ranking {
    background-color: #f6f6f6;
    color: #30485a;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    margin-top: .5rem;
    line-height: 2.2rem;
    font-size: 1.2rem;
  }

  .rank-name {
    line-height: 3.2rem;
    width: 54%;
    text-align: left;
    font-size: 1.2rem;
  }

  .rank-statistics {
    line-height: 3.2rem;
    width: 33%;
    text-align: right;
  }
</style>