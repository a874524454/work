<template>
  <div id="app">
    <div class="menu">
      <el-select v-model="value" @change="switchLanguage(value)" class="el-select">
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
          v-model="username"
          name="用户名"
          :label="this.$t('localization.用户名')"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
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
    //     var validateUser = (rule, value, callback) => {
    //       if (value === '') {
    //         callback(new Error('请输入用户名'));
    //       }else if(value.length<6){
    //         callback(new Error('用户名不能少于六位数'));
    //       } else{
    //         callback();
    //       }
    //     };
    //     var validatePass = (rule, value, callback) => {
    //       if (value === '') {
    //         callback(new Error('请输入密码'));
    //       }else if(value.length<6){
    //         callback(new Error('密码不能少于六位数'));
    //       } else {
    //         // if (this.ruleForm.pass !== '') {
    //         //   this.$refs.ruleForm.validateField('pass');
    //         // }
    //         callback();
    //       }
    //     };
    //     return {
    //       ruleForm: {
    //         username: '',
    //         pass: ''
    //       },
    //       rules: {
    //         username: [
    //           { validator: validateUser, trigger: 'blur' }
    //         ],
    //         pass: [
    //           { validator: validatePass, trigger: 'blur' }
    //         ]
    //       }
    //     };
    return {
      username: "",
      password: "",
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
  methods: {
    // submitForm(formName) {
    //     this.$refs[formName].validate((valid) => {
    //       if (valid) {
    //         alert('submit!');
    //         this.$router.push("/home");
    //       } else {
    //         console.log('error submit!!');
    //         return false;
    //       }
    //     });
    //   },
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
};
</script>
<style>
@media screen and (min-width: 0px) {
  html {
    font-size: 100px !important;
  }
}
</style>
<style scoped lang='less'>
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