<template>
  <div class="home">
    <el-header>
      <div class="zi">
        <span>{{this.$t("localization.会议类型")}}：{{this.$t("localization.手动会议")}}</span>
        <span>{{this.$t("localization.主持者")}}：xxx</span>
      </div>
      <el-select v-model="value" @change="switchLanguage(value)" class="el-select">
        <el-option
          v-for="item in language"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <!-- <el-menu
        :default-active="active"
        class="el-menu-vertical-demo"
        router
        mode="horizontal"
      >
       <el-menu
        :default-active="active"
        class="el-menu-vertical-demo"
        router
        menu-trigger="click"
        mode="horizontal"
      >
        <el-submenu index="1">
          <template slot="title">{{this.$t("localization.菜单")}}</template>
          <el-menu-item index="/home/index">
            <i class="el-icon-document"></i>
            <span slot="title">{{this.$t("localization.会议信息")}}</span>
          </el-menu-item>
          <el-menu-item index="/home/information">
            <i class="el-icon-folder-opened"></i>
            <span slot="title">{{this.$t("localization.议题资料")}}</span>
          </el-menu-item>
          <el-menu-item index="/home/notation">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">{{this.$t("localization.画笔批注")}}</span>
          </el-menu-item>
          <el-menu-item index="/home/vote">
            <i class="el-icon-finished"></i>
            <span slot="title">{{this.$t("localization.投票表决")}}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu> -->
      <el-dropdown trigger="click" class="abc">
      <span class="el-dropdown-link" style="color:white;">
        菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-menu
        :default-active="active"
        class="el-menu-vertical-demo"
        router
        mode="horizontal"
      >
          <template slot="title">{{this.$t("localization.菜单")}}</template>
          <el-menu-item index="/home/index">
            <i class="el-icon-document"></i>
            <span slot="title">{{this.$t("localization.会议信息")}}</span>
          </el-menu-item>
          <el-menu-item index="/home/information">
            <i class="el-icon-folder-opened"></i>
            <span slot="title">{{this.$t("localization.议题资料")}}</span>
          </el-menu-item>
          <el-menu-item index="/home/notation">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">{{this.$t("localization.画笔批注")}}</span>
          </el-menu-item>
          <el-menu-item index="/home/vote">
            <i class="el-icon-finished"></i>
            <span slot="title">{{this.$t("localization.投票表决")}}</span>
          </el-menu-item>
      </el-menu>
      </el-dropdown-menu>
    </el-dropdown>
    </el-header>
    <el-container style="height: 100%;">
      <el-menu
        default-active="1"
        router
        :collapse="isCollapse"
        class="dis"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/home/index">
          <i class="el-icon-document"></i>
          <span slot="title">{{this.$t("localization.会议信息")}}</span>
        </el-menu-item>
        <el-menu-item index="/home/information">
          <i class="el-icon-folder-opened"></i>
          <span slot="title">{{this.$t("localization.议题资料")}}</span>
        </el-menu-item>
        <el-menu-item index="/home/notation">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">{{this.$t("localization.画笔批注")}}</span>
        </el-menu-item>
        <el-menu-item index="/home/vote">
          <i class="el-icon-finished"></i>
          <span slot="title">{{this.$t("localization.投票表决")}}</span>
        </el-menu-item>
      </el-menu>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script src="./node_modules/amfe-flexible/index.js"></script>
<script>
export default {
  data() {
    return {
      active: '1',
      show: false,
      isCollapse: false,
      value: this.$i18n.locale,
      // language: [
      //   {
      //   value: "en-US",
      //   label:this.$t("English")
      //   },
      //   {
      //   value: "zh-CN",
      //   label: this.$t("中文简体")
      //   }
      // ]
    };
  },
  computed: {
    language(){
      return[
        {
          value: "en-US",
          label:this.$t("English")
        },
        {
          value: "zh-CN",
          label: this.$t("简体中文")
        }
      ]
    }
  },
  methods: {
    switchLanguage(value) {
      if (value == "zh-CN") {
        this.$i18n.locale = "zh-CN";
      } else if (value == "en-US") {
        this.$i18n.locale = "en-US";
      }
      //在选择了显示的语言后，将配置保存到Cookie中
      // this.$cookie.set("DefaultLanguage",value,{expires: "30m"});                     
      this.$cookies.set("DefaultLanguage",value);
      console.log(this.$cookies.get("DefaultLanguage"));

    }
  }
};
</script>
<style lang='less'>
.home {

  .el-dropdown{
    width: 100%;
    text-align: center;
    line-height:100px
  }
  .zi {
    display: flex;
    flex-direction: column;
  }
  .el-submenu__title:hover {
    background-color: rgba(192, 101, 101, 0) !important;
    // background-image: url("../assets/timg.jpg");
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: top right;
  }
  .el-submenu {
    box-sizing: border-box;
    width: 60px;
    overflow: hidden;
    position: absolute;
    right: 0;
  }
  .el-submenu__title {
    padding: 0;
    width: 50px;
    color: white !important;
    i {
      color: white;
    }
  }
}
@media screen and (max-width: 767px) {
  .dis {
    display: none;
  }
  .home {
    .el-menu {
      height: 100%;
    }
  }
  .el-menu-item .el-tooltip {
    padding-left: 12px !important;
  }
}
@media (min-width: 767px) {
  .el-menu-vertical-demo,.abc {
    display: none;
  }
  .el-main {
    padding: 0;
    // height: calc(100vh - 1.44rem);
    // overflow: auto;
  }
  .home {
    .zi {
      display: block;
      span {
        margin-left: 10px;
      }
    }
    .el-menu {
      height: calc(100vh - 54px);
    }
  }
}
</style>
<style scoped lang='less'>
@media screen and (max-width: 500px) {
  .el-menu-item {
    padding: 0 0.73333rem;
    width:100%;
    span {
      font-size: 14px;
    }
    div {
      padding: 12px;
    }
  }
  .el-menu {
    list-style: none;
    padding-left: 0;
    width: 40px !important;
  }
  .abc:not(.el-menu--collapse) {
    // min-height: 400px;
    width: 100px !important;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    // min-height: 400px;
    width: 210px !important;
  }
  .el-aside {
    width: 40px !important;
  }
}
@media (min-width: 501px) {
  .el-menu-item {
    padding: 0 0.73333rem;
    width: 100%;
    span {
      font-size: 14px;
    }
  }

  .el-menu {
    list-style: none;
  }
  .abc:not(.el-menu--collapse) {
    width: 100px !important;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
    width: 210px !important;
  }
}
.home {
  position: relative;
  height: 100%;
  background-image: url("../assets/timg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top left;
  .el-select{
    width: 40px;
  }
  .el-menu-item {
    color: white;
    span {
      font-size: 16px !important;
    }
  }
  .el-main {
    padding: 0;
    // overflow: auto;
    background-color: #fff;
    // overflow: hidden;
    height: calc(100vh - 1.44rem);
  }
  .el-container {
    display: flex;
    flex-direction: row-reverse;
  }
  .el-header {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #fff;
    overflow: hidden;
    position: relative;
    padding: 0 !important;
    // background-image: url("../assets/timg.jpg");
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: top right;
  }
  .el-menu {
    list-style: none;
    // background-image: url('../assets/timg.jpg');
    // background-repeat: no-repeat;
    // background-size:cover;
    // background-position:top right;
    background-color: rgba(192, 101, 101, 0) !important;
    
  }
  .el-menu-item i {
    color: #fff;
  }
  // .el-menu-vertical-demo:not(.el-menu--collapse) {
  //   min-height: 100%;
  // }

}
</style>