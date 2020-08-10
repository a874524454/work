<template>
  <div id="app">
    <div class="menu">
      <el-select v-model="value" @change="switchLanguage(value)">
        <el-option
          v-for="item in language"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-dropdown>
        <el-button type="primary">
          {{this.$t("localization.菜单")}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>{{this.$t("localization.历史会议")}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="login">
      <van-form @submit="onSubmit">
        <van-field
          validate-first
          v-model="username"
          name="用户名"
          :label="this.$t('localization.用户名')"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' },{min: 6,max: 12,message: '长度在 6 到 12 个字符'}]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          :label="this.$t('localization.密码')"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">{{this.$t('localization.提交')}}</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      value: this.$i18n.locale,
    };
  },
  methods: {
    switchLanguage(value) {
        if (value == "zh-CN") {
            this.$i18n.locale = "zh-CN";
        } else if (value == "en-US") {
            this.$i18n.locale = "en-US";
        }
        //在选择了显示的语言后，将配置保存到Cookie中,保质期三十分钟
        // this.$cookie.set("DefaultLanguage",value,{expires: "30m"});                     
        this.$cookies.set("DefaultLanguage",value);
        this.$cookies.get("DefaultLanguage");
        },
    onSubmit(values) {
      if (values) {
        console.log("submit", values);
        alert("submit!");
        this.$router.push("/home");
      } else {
        console.log("error submit!!");
        return false;
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
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
      ]}
  }
};
</script>
<style lang='less'>
@media screen and (min-width: 0px) {
  html {
    font-size: 100px !important;
  }
}
.menu{
  .el-input{
    width:120px !important;
  }
}
</style>
<style scoped lang='less'>
.menu{
  .el-select{
    margin-left: 20px;
  }
}
.login{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  .el-form-item__label {
    width: 30px;
  }
}
/* 菜单 */
.menu {
  overflow: hidden;
}
.el-dropdown {
  float: right;
  margin-right: 20px;
}
.el-dropdown-selfdefine {
  width: 70px;
  height: 40px;
  padding: 0;
  line-height: 30px;
  text-align: center;
  background-color: skyblue;
  border: none;
  font-size: 10px;
}
.el-dropdown-selfdefine .el-icon-arrow-down {
  font-size: 10px;
}
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown-menu {
  width: 60px;
}
.el-dropdown-menu__item {
  text-align: center;
  padding: 0 5px;
  font-size: 10px;
}
</style>