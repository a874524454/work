<template>
  <div class="info">
    <el-container>
      <el-aside width="100%">
        <el-menu :default-active="active" class="el-menu-demo" router mode="horizontal">
          <el-menu-item index="/home/index/info1">
            <i class="el-icon-document"></i>
            <span slot="title">基本信息</span>
          </el-menu-item>
          <el-menu-item index="/home/index/info2">
            <i class="el-icon-folder-opened"></i>
            <span slot="title">参会人员列表</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
    </el-container>
    <el-main>
        <router-view></router-view>
      </el-main>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:'0'
    }
  },
  methods: {
    
  }
}
</script>

<style lang='less'>
.info{
  // height: 100%;
  .el-main{
    height: 100%;
    padding: 0;
  }
  .el-menu{
    width: 100%;
    height: 50px;
  }
  .el-container{
    width: 100%;
  }
  .el-container li{
    height: 50px;
    margin-left: 20px;
  }
  .el-menu-item{
    font-size: 12px;
    padding: 0;
    box-sizing: border-box;
  }
  .el-menu--horizontal>.el-menu-item.is-active{
    border-bottom: 1px solid #409EFF;
    color: #303133;
  }
} 
</style>