<template>
<div class="a">
    <div class="b">
    <p class="title">{{this.$t("localization.基本信息")}}</p>
    <p>{{this.$t("localization.登录用户")}}：xxx</p>
    <p>{{this.$t("localization.座位")}}：1</p> 
    <p>{{this.$t("localization.本次会议")}}:{{this.$t("localization.中国共产党十九大")}}</p>
    </div>
    <div class="c">
      <p class="title">{{this.$t("localization.在线人数")}}</p>
      <p>{{this.$t("localization.参与人数")}}:1</p>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
.a{
  font-size: 14px;
  display: flex;
  flex-direction: column;
  .b{
    width: 90%;
    background-color: skyblue;
    border-radius: 10px;
    margin: 10px auto;
    padding-left: 10px;
  }
  .c{
    width: 90%;
    border-radius: 10px;
    margin: 0 auto;
    padding-left: 10px;
    background-color: skyblue;
  }
}

</style>