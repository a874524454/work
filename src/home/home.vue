<template>
  <div class="home">
    <el-header>
        当前会议：手动会议 参与者：xxx
    </el-header>
      <el-tabs tab-position="right" style="height:600px;" @tab-click='tabClick'>
        <el-tab-pane label="用户管理">
          用户管理
          <router-view></router-view>
        </el-tab-pane>
        <el-tab-pane label="配置管理">
          配置管理
          <router-view></router-view>
        </el-tab-pane>
        <el-tab-pane label="角色管理">
          角色管理
          <router-view></router-view>
        </el-tab-pane>
        <el-tab-pane label="定时任务补偿">
          定时任务补偿
          <router-view></router-view>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>
<script src="./node_modules/amfe-flexible/index.js"></script>
<script>
export default {
  // data(){
  //   userid:this.$route.query.userid
  // },
  methods: {
    tabClick(){
      this.$router.push({path:'/home/index'});
    }
  }
   
};
</script>

<style scoped lang='less'>


.home {
  .el-header{
    background-color: skyblue;
    display: flex;
    align-items: center;
    justify-content:center;
    font-size: 16px;
  }
  .el-tabs {
    .el-tabs {
      
      .el-tabs__content{height: 700px;}
    }
  }
}
</style>