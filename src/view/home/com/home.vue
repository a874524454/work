<template>
  <div class="main">
    <van-cell-group>
      <van-cell title="资源库">
      <van-icon slot="right-icon" size='24' name="orders-o" class="custom-icon" />
    </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="待批改作业">
          <van-icon slot="right-icon" size='24' name="orders-o" class="custom-icon" />
    </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="发布作业" value="内容" />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="录音" value="内容" to="/list" />
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