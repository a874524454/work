<template>
  <div class="infomation">
    <div class="main">
      <div class="header">
        <p>没有进行中的命题</p>
      </div>
      <table :model="tableData" id="printTest" v-for="(item,index) in tableData" :key="index">
        <tr>
          <td @click="changeContent(index)" class="title" rowspan="5">></td>
        </tr>
        <tr>
          <td>议题</td>
          <td>{{item.title}}</td>
        </tr>
        <tr v-show="item.show">
          <td>时间</td>
          <td>{{item.time}}</td>
        </tr>
        <tr v-show="item.show">
          <td>提出部门</td>
          <td>{{item.create}}</td>
        </tr>
        <tr v-show="item.show">
          <td>相关部门</td>
          <td>{{item.related}}</td>
        </tr>
        <tr v-show="item.show" class="tu">
          <td colspan="3">
            <img v-image-preview src="../../assets/img.png" alt />
            <span>02.jpg</span>
          </td>
        </tr>
        <tr v-show="item.show" class="tu">
          <td colspan="3">
            <!-- <iframe src="../../assets/2020_PDF.pdf"></iframe> -->
            <pdf :src='src'></pdf>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import pdf from "vue-pdf";
export default {
  components: {
    pdf,
  },
  data() {
    return {
      show: false,
      currentArr: [],
      currentIndex: 0,
      styleObject: {},
      s_showByRow: true,
      src:'',
      tableData: [
        {
          title: "议题一",
          time: "19.02-19.04",
          create: "国务院",
          related: "国务院",
          show: false,
        },
        {
          title: "议题二",
          time: "19.04-19.06",
          create: "国务院1",
          related: "国务院1",
          show: false,
        },
        {
          title: "议题三",
          time: "19.06-19.08",
          create: "国务院2",
          related: "国务院2",
          show: false,
        },
        {
          title: "议题三",
          time: "19.06-19.08",
          create: "国务院2",
          related: "国务院2",
          show: false,
        },
        {
          title: "议题三",
          time: "19.06-19.08",
          create: "国务院2",
          related: "国务院2",
          show: false,
        },
        {
          title: "议题三",
          time: "19.06-19.08",
          create: "国务院2",
          related: "国务院2",
          show: false,
        },
        {
          title: "议题三",
          time: "19.06-19.08",
          create: "国务院2",
          related: "国务院2",
          show: false,
        },
      ],
    };
  },
  methods: {
    changeContent(index) {
      //通过index拿到当前值
      this.tableData[index].show = !this.tableData[index].show;
    },
  },
};
</script>
<style lang='less'>
.infomation {
  height: 100%;
  overflow: auto;
  p {
    font-size: 14px;
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
}
.active {
  display: none;
}
table {
  font-size: 14px;
}

.title {
  vertical-align: top;
}
.tu img {
  width: 50px;
  height: 50px;
  vertical-align: middle;
}
.tu span {
  margin-left: 10px;
}

table,
tr,
td {
  border: 1px solid #000;
  border-collapse: collapse;
}
table tr td {
  // width: 200px;
  padding: 5px 10px;
}
table tr td:nth-child(2) {
  width: 1000px;
}
.el-collapse-item__content {
  padding-bottom: 0;
}
.el-table td,
.el-table th {
  padding: 5px 0;
}
.el-collapse-item__header {
  height: 30px;
}
</style>
<style scoped>
.el-table td.is-center {
  text-align: left;
}

.el-table {
  font-size: 12px;
  margin-top: 0;
}

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>