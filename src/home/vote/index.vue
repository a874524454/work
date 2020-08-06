<template>
  <div class="vote">
        <div class="header">投票列表</div>
          <van-cell icon="bar-chart-o" title="实施食品安全战略" is-link to="index1" />
          <van-cell icon="bar-chart-o" title="扩大中等收入群体" is-link to="index1" />
          <van-cell icon="bar-chart-o" title="确保2020年贫困人口" is-link to="index1" />
  </div>
</template>

<script>
export default {
  methods: {
    goBack(){
      this.$router.back()
    }
  }
};
</script>

<style lang='less' scoped>
.vote{
  height: 100%;
  background-color: #e6ebee;
  .header{
    padding: 10px;
    border-bottom: 1px solid #000;
    font-size: 14px;
  }
  .van-cell{
    background-color: #e6ebee;
    border-bottom: 1px solid #000;
  }
}
</style>