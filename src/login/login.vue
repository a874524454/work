<template>
  <div id="app">
    <div class="menu">
      <el-dropdown>
        <el-button type="primary">
          更多菜单
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>历史会议</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="65px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input type="username" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>-->
    <div class="login">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
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