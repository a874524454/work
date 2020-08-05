<template>
<div class="a">
    <div class="b">
    <p class="title">基本信息</p>
    <p>登录用户：xxx</p>
    <p>座位号：1</p> 
    <p>本次会议：中国共产党十九大</p>
    </div>
    <div class="c">
      <p class="title">在线人数</p>
      <p>已参与人数:1</p>
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
    height: 150px;
    background-color: skyblue;
    border-radius: 10px;
    margin: 10px auto;
    padding-left: 10px;
  }
  .c{
    width: 90%;
    height: 100px;
    border-radius: 10px;
    margin: 0 auto;
    padding-left: 10px;
    background-color: skyblue;
  }
}

</style>