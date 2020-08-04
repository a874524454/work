<template>
<div class="a">
    <div class="b">
    <p>基本信息</p>
    <p>登录用户：xxx</p>
    <p>座位号：1</p> 
    <p>本次会议：中国共产党十九大</p>
    </div>
    <div class="c">
      <p>在线人数</p>
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
    height: 100px;
    background-color: skyblue;
    border-radius: 10px;
    margin: 10px auto;
  }
  .c{
    width: 90%;
    height: 100px;
    border-radius: 10px;
    margin: 0 auto;
    background-color: skyblue;
  }
}

</style>