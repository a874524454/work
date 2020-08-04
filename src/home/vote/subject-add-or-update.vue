<template>
  <div class="subject">
    <el-dialog center :visible.sync="dialogVisible" width='300px'>
      <div slot="title" class="title">
        新增投票
      </div>
      <el-form
        :model="subjectForm"
        :rules="rules"
        ref="subjectFormRef"
        label-width="80px"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="subjectForm.name"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input v-model="subjectForm.content"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "SubjectEdit",
  data() {
    return {
      dialogVisible: false,
      subjectForm: {
        name: "",
        content: ""
      },
      rules: {
        name: [
          { required: true, message: "名称不能为空", trigger: "change" },
        ],
        content: [
          { required: true, message: "内容不能为空", trigger: "change" },
        ],
      },
    };
  },
  watch: {
    dialogVisible(newValue) {
      if (!newValue) {
        this.$refs.subjectFormRef.clearValidate();
      }
    },
  },
  methods: {
    submit() {
      this.$refs.subjectFormRef.validate(async (valid) => {
        if (!valid) return;

        let res = null;
        if (this.mode === "add") {
          res = await this.$axios.post("", this.subjectForm);
        }
        if (res.data.code === 200) {
          this.$message({
            type: "success",
            message: "新增成功"
          });
          this.dialogVisible = false;
        }
      });
    },
  },
};
</script>

<style lang="less">
.subject {
  .title {
    text-align: center;
    color: #fff;
    background-color: #0e9ff9;
    height: 53px;
    line-height: 53px;
  }
  .el-form-item__label{
    font-size: 12px;
  }
  .el-dialog__body{padding: 10px;}
  .el-dialog__header {
    padding: 0px;
  }
  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
  }
}
</style>
