<template>
  <div class="home">
    <el-header>
      
      <div class="zi">
        <span>{{this.$t("localization.meettype")}}：{{this.$t("localization.meet")}}</span>
        <span>{{this.$t("localization.presider")}}：xxx</span>
      </div>
      <el-select v-model="value" @change="switchLanguage(value)" class="el-select">
        <el-option
          v-for="item in language"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        router
        menu-trigger="click"
        mode="horizontal"
      >
        <el-submenu index="1">
          <template slot="title">{{this.$t("localization.menu")}}</template>
          <el-menu-item index="/home/index">
            <i class="el-icon-document"></i>
            <span slot="title">{{this.$t("localization.information")}}</span>
          </el-menu-item>
          <el-menu-item index="/home/information">
            <i class="el-icon-folder-opened"></i>
            <span slot="title">{{this.$t("localization.Isinformation")}}</span>
          </el-menu-item>
          <el-menu-item index="/home/notation">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">{{this.$t("localization.notation")}}</span>
          </el-menu-item>
          <el-menu-item index="/home/vote">
            <i class="el-icon-finished"></i>
            <span slot="title">{{this.$t("localization.vote")}}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-container style="height: 100%;">
      <!-- <el-aside width="auto" class="dis"> -->
      <el-menu
        default-active="1"
        router
        :collapse="isCollapse"
        class="dis"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/home/index">
          <i class="el-icon-document"></i>
          <span slot="title">{{this.$t("localization.information")}}</span>
        </el-menu-item>
        <el-menu-item index="/home/information">
          <i class="el-icon-folder-opened"></i>
          <span slot="title">{{this.$t("localization.Isinformation")}}</span>
        </el-menu-item>
        <el-menu-item index="/home/notation">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">{{this.$t("localization.notation")}}</span>
        </el-menu-item>
        <el-menu-item index="/home/vote">
          <i class="el-icon-finished"></i>
          <span slot="title">{{this.$t("localization.vote")}}</span>
        </el-menu-item>
      </el-menu>
      <!-- </el-aside> -->
      <el-main>
        <!-- <div class="abc"> -->
        <router-view></router-view>
        <!-- </div> -->
      </el-main>
    </el-container>
  </div>
</template>
<script src="./node_modules/amfe-flexible/index.js"></script>
<script>
export default {
  data() {
    return {
      active: 0,
      show: false,
      isCollapse: false,
      value: this.$i18n.locale,
       language: [
            {
            value: "en-US",
            label: "English"
            },
            {
            value: "zh-CN",
            label: "中文简体"
            }
      ]
    };
  },
  // created() {
  //   this.$nextTick(() => {
  //     if (document.body.clientWidth > 414) {
  //       this.isCollapse = false;
  //     }
  //   });
  // },
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
        this.$cookies.get("DefaultLanguage");
        }
    }
};
</script>
<style lang='less'>
.home {
  .zi {
    display: flex;
    flex-direction: column;
  }
  .el-submenu__title:hover {
    background-image: url("../assets/timg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top right;
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
  .abc {
    overflow-y: auto;
    height: calc(100vh - 1.44rem);
  }
  .home {
    .el-menu {
      height: 100%;
    }
  }
}
@media screen and (max-width: 767px) {
  .el-menu-item .el-tooltip {
    padding-left: 12px !important;
  }
}
@media (min-width: 767px) {
  .el-menu-vertical-demo {
    display: none;
  }
  .abc {
    overflow: auto;
    height: 100%;
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
    padding-left: 12px !important;
    span {
      font-size: 10px;
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
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
    width: 100px !important;
  }
  .el-aside {
    width: 40px !important;
  }
}
@media (min-width: 501px) {
  .el-menu-item {
    span {
      font-size: 10px;
    }
  }

  .el-menu {
    list-style: none;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
    width: 150px !important;
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
    width: 110px;
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
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 100%;
  }
}
</style>