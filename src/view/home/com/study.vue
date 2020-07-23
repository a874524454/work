<template>
  <div class="main">
      <van-cell-group>
      <van-cell title="我的作业">
      <van-icon slot="right-icon" size='24' name="orders-o" class="custom-icon" />
    </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="录音" to='/list'>
          <van-icon slot="right-icon" size='24' name="orders-o" class="custom-icon" />
    </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main{
    padding: 10px;
}
.van-cell{
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 10px;

}
.van-cell-group{
border-radius: 10px;
}
</style>