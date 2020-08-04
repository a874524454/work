<template>
  <div>
    <!-- <el-button class="aButton" @click="add" type="primary">新增投票</el-button> -->
    <!-- <div>
      <h3>{{title}}</h3>
      <ul>
        <li v-for="(item, index) in voteForm" :key="index">
          <el-radio-group v-model="radio">
            <el-radio :label="index">{{item.content}}</el-radio>
          </el-radio-group>
        </li>
      </ul>
      <el-button @click="handleVote(radio)">投票</el-button>
    </div>

    <van-swipe-cell>
      <van-card
        desc="菇菇菇菇菇菇菇菇菇菇"
        title="议题"
        class="goods-card"
        thumb="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <template #left>
        <van-button square text="赞同" type="primary" class="delete-button" />
      </template>
      <template #right>
        <van-button square text="反对" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell> -->
    <el-collapse v-model="activeNames">
      <el-collapse-item title='参与过的议题' name='select'>
      <el-collapse-item class='two' v-for="(item,index) in tableData" :key="index" :name='index'>
        <template slot="title">{{item.title}}</template>
        <table :model="tableData" id="printTest" >
              <tr>
                <td>议题</td>
                <td>{{item.title}}</td>
              </tr>
              <tr>
                <td>时间</td>
                <td>{{item.time}}</td>
              </tr>
              <tr>
                <td>提出部门</td>
                <td>{{item.create}}</td>
              </tr>
              <tr>
                <td>相关部门</td>
                <td>{{item.related}}</td>
              </tr>
              <tr>
                <td>内容</td>
                <td>{{item.content}}</td>
              </tr>
              <tr>
                <td>态度</td>
                <td>{{item.attitude}}</td>
              </tr>
              <tr>
                <td>结果</td>
                <td>{{item.result}}</td>
              </tr>
          </table>
      </el-collapse-item>
      </el-collapse-item>
    </el-collapse>
    <subject-edit ref="subjectEditRef"></subject-edit>
  </div>
</template>

<script>
import SubjectEdit from "./subject-add-or-update";
export default {
  components: {
    "subject-edit": SubjectEdit,
  },
  data() {
    return {
      radio: 0,
      voteForm: [
        { title: "咕咕咕", content: "123" },
        { title: "咕咕咕", content: "223" },
        { title: "咕咕咕", content: "323" },
      ],
      activeNames: ['select'],
      styleObject: {},
      s_showByRow: true,
      tableData: [
        {title: "议题一",time: "19.02-19.04",create: "国务院",related: "国务院",content:'咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕',attitude:"同意",result:'通过'},
        {title: "议题二",time: "19.04-19.06",create: "国务院1",related: "国务院1",content:'咕咕咕咕咕',attitude:"同意",result:'未通过'},
        {title: "议题三",time: "19.06-19.08",create: "国务院2",related: "国务院2",content:'咕咕咕咕咕',attitude:"反对",result:'通过'}
      ]
    };
  },
  methods: {
    // onSubmit(values) {
    //   console.log("submit", values);
    // },
    add() {
      this.$refs.subjectEditRef.mode = "add";
      this.$refs.subjectEditRef.dialogVisible = true;
      this.$refs.subjectEditRef.subjectForm = {
        name: "", 
        content: "",
      };
    },
  },
};
</script>

<style>
.two{
  margin-left:20px;
}
.goods-card {
  width: 100%;
    margin: 0;
    background-color: white;
  }

  .delete-button {
    height: 100%;
    overflow: hidden;
  }
.aButton {
  width: 60px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.aButton span {
  font-size: 12px;
}
</style>