<template>
  <div class="content">
    <van-nav-bar
      :title="this.$t('localization.表决内容')"
      :left-text="this.$t('localization.返回')"
      left-arrow
      @click-left="goBack()"
    />
    <div class="main">
      <p class="title">{{this.$t("localization.表决标题")}}</p>
      <p class="c">{{this.$t("localization.实施食品安全战略")}}</p>
      <p class="title">{{this.$t("localization.表决内容")}}</p>
      <p class="c">{{this.$t("localization.实施食品安全战略内容")}}</p>
      <p class="title">{{this.$t("localization.表决选项")}}</p>
      <p class="c">{{this.$t("localization.单选")}}:{{this.$t("localization.赞成")}},{{this.$t("localization.反对")}}</p>
      <p class="title">{{this.$t("localization.会议类型")}}</p>
      <p class="c">{{this.$t("localization.匿名")}}</p>
      <p class="title">{{this.$t("localization.状态")}}</p>
      <p class="c">{{this.$t("localization.未表决")}}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      console.log('返回');
      this.$router.back();
    },
  },
};
</script>

<style lang='less'>
.content{
  .van-nav-bar__left{
    padding: 0;
  }
  .main{
    font-size: 15px;
    padding-left: 10px;
    .title{
      color:#9fa4ac ;
    }
    .c{
      margin-left: 10px;
    }
  }
}
</style>