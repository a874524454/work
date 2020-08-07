<template>
<div class="a">
    <div class="b">
    <p class="title">{{this.$t("localization.bainformation")}}</p>
    <p>{{this.$t("localization.user")}}：xxx</p>
    <p>{{this.$t("localization.seat")}}：1</p> 
    <p>{{this.$t("localization.mt")}}:{{this.$t("localization.t")}}</p>
    </div>
    <div class="c">
      <p class="title">{{this.$t("localization.online")}}</p>
      <p>{{this.$t("localization.mt")}}:{{this.$t("localization.participation")}}:1</p>
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