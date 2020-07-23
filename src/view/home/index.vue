<template>
  <div id="app">
    <van-nav-bar title="我的教学" />
    <!-- <div class="main">
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
      <van-cell title="录音" value="内容" to="list" />
    </van-cell-group>
    </div> -->
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to='/index/home'>云班课</van-tabbar-item>
      <van-tabbar-item icon="search" to="/index/study">学习</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {},
};
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