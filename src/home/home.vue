<template>
  <div class="home">
    <el-header>当前会议：手动会议 参与者：xxx</el-header>
    <el-container style="height: 100%;">
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
      <el-aside width="auto">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
          :collapse="isCollapse"
        >
          <el-menu-item index="/home/index">
            <i class="el-icon-document"></i>
            <span slot="title">会议信息</span>
          </el-menu-item>
          <el-menu-item index="/home/information">
            <i class="el-icon-folder-opened"></i>
            <span slot="title">议题资料</span>
          </el-menu-item>
          <el-menu-item index="/home/notation">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">画笔批注</span>
          </el-menu-item>
          <el-menu-item index="/home/vote">
            <i class="el-icon-finished"></i>
            <span slot="title">投票表决</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main style="background-color:#e8e9ec;">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script src="./node_modules/amfe-flexible/index.js"></script>
<script>
export default {
  data(){
    return{
      isCollapse: true
    }
  },
  created () {
    this.$nextTick(()=>{
    console.log(document.body.clientWidth);
    if(document.body.clientWidth>414){
      this.isCollapse=false
    }
    })
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style>
@media screen and (max-width: 500px) {
  .el-menu-item .el-tooltip{
    padding-left: 12px !important;
  }
  }
</style>
<style scoped lang='less'>
@media screen and (max-width: 500px) {
  .el-menu-item {
    padding-left:12px !important;
    span {
      font-size: 10px;
    }
    div{
      padding:12px;
    }
  }


  .el-menu {
    border-right: solid 0px #e6e6e6;
    list-style: none;
    position: relative;
    right: 0;
    margin: 0;
    padding-left: 0;
    background-color: #fff;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
    width: 100px !important;
  }
  .el-aside{
    width:40px !important;
  }
}
@media (min-width: 414px) and (max-width: 1024) {
  .el-menu-item {
    span {
      font-size: 10px;
    }
  }

  .el-menu {
    border-right: solid 0px #e6e6e6;
    list-style: none;
    position: relative;
    right: 0;
    margin: 0;
    background-color: #fff;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
    width: 150px !important;
  }
  
}
.home {
  position: relative;
  height: 100%;
  .el-aside {
    height: 100vh;
    height: calc(100vh - 54px);
  }

  .el-main {
    padding: 0;
  }
  .el-container {
    display: flex;
    flex-direction: row-reverse;
  }
  .el-header {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
  .el-menu {
    border-right: solid 0px #e6e6e6;
    list-style: none;
    position: relative;
    right: 0;
    margin: 0;
    padding-left: 0;
    background-color: #fff;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 100%;
  }
  
  
}
</style>