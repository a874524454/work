<template>
  <div class="vote">
        <div class="header">投票列表</div>
          <van-cell icon="bar-chart-o" :title="this.$t('localization.vote1')" is-link to="index1" />
          <van-cell icon="bar-chart-o" :title="this.$t('localization.vote2')" is-link to="index1" />
          <van-cell icon="bar-chart-o" :title="this.$t('localization.vote3')" is-link to="index1" />
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