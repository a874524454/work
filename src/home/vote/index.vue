<template>
  <div class="vote">
        <div class="header">{{this.$t('localization.投票列表')}}</div>
          <van-cell icon="bar-chart-o" :title="this.$t('localization.实施食品安全战略')" is-link to="index1" />
          <van-cell icon="bar-chart-o" :title="this.$t('localization.扩大中等收入群体')" is-link to="index1" />
          <van-cell icon="bar-chart-o" :title="this.$t('localization.促进2020全面小康')" is-link to="index1" />
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