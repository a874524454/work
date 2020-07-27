<template>
  <div id="app">
    <van-pull-refresh v-model="refreshing" @refresh="refresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :offset="10"
      >
        <van-collapse v-model="activeNames">
          <van-collapse-item v-for="(item,index) in typeList" :key="index" :name="index">
            <template slot="title">{{item.uploadtime | fnTime}}</template>
            <div class="main">
              <div class="left">
                <img src="./assets/img.png" alt />
              </div>
              <div class="right">
                <a class="title">{{item.filename}}</a>
                <a>{{formatBytes(item.filesize)}}</a>
                <a>{{item.uploadtime | servertime2Jstime}}</a>
              </div>
            </div>
          </van-collapse-item>
        </van-collapse>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script src="./node_modules/amfe-flexible/index.js"></script>
<script>
import Axios from "axios";
import { typeList } from "../src/utils/type.js";
export default {
  data() {
    return {
      activeNames: ["1"],
      // typeList: typeList,
      typeList: [],
      loading: false,
      finished: false,
      refreshing: false,
      page: 1,
      length: 0
      // userid:this.$route.query.id
    };
  },
  created() {
    this.getType();
  },
  methods: {
    refresh() {
        this.typeList = [];
        this.page = 1;
        this.loading = true;
        this.refreshing = false;
        this.finished = false;
        this.getType();
    },
    onLoad() {
      // if(this.length==10){
        this.page=this.page+1
        this.getType()
        this.loading = false;
        // }
        // 加载状态结束}
      //   else{
      //     this.loading=false
      //     this.finished = true;
      //     return
      // }
    },
    // getScroll(event) {
    //   let scrollBottom =
    //     event.target.scrollHeight -
    //     event.target.scrollTop -
    //     event.target.clientHeight;
    //   if (!this.finished && scrollBottom < 40) {
    //       this.finished = false;
    //       this.page = this.page + 1;
    //       this.getType();
    //       this.loading = false;
    //       // 加载状态结束
    //       if (this.length != 5) {
    //         this.loading=false
    //         this.finished = true;
    //       }
    //   }
    // },
    async getType() {
      let data = await Axios({
        url: "/sapi/upfiles/query",
        method: "POST",
        data: {
          where: {
            userid: 0
          },
          // userid:this.userid,
          page: {
            page: this.page,
            pagesize: 10
          }
        }
      });
      console.log(data.data.data.files);
      if(data.data.data.files){
      this.typeList = [...this.typeList,...data.data.data.files];
      console.log(this.typeList);
      this.length = data.data.data.files.length;
      this.loading=false
      this.finished=false
      }else{
        this.loading=false
        this.finished=true
        return
      }
    },
    servertime2Jstime(timestr) {
      if (!timestr) {
        return new Date();
      }
      var t = Date.parse(timestr);
      if (!isNaN(t)) {
        return new Date(Date.parse(timestr.replace(/-/g, "/")));
      } else {
        return new Date();
      }
    },
    formatBytes(a, b) {
      if (0 == a) return "0 Bytes";
      var c = 1024,
        d = b || 2,
        e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        f = Math.floor(Math.log(a) / Math.log(c));
      return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f];
    }
  },
  filters: {
    servertime2Jstime: function(time) {
      // if (!timestr) {
      //   return new Date();
      // }
      // var t = Date.parse(timestr);
      // if (!isNaN(t)) {
      //   return new Date(Date.parse(timestr.replace(/-/g, "/")));
      // } else {
      //   return new Date();
      // }
      let ptime = new Date(time).getTime();
      const twentyFourHours = 24 * 60 * 60 * 1000;
      const fortyEightHours = 24 * 60 * 60 * 1000 * 2;
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const today = `${year}-${month}-${day}`;
      const todayTime = new Date(today).getTime();
      const yesterdayTime = new Date(todayTime - twentyFourHours).getTime();
      const lastYesterdayTime = new Date(todayTime - fortyEightHours).getTime();

        let timestr1=time.split(' ')[1].split(':')
        let timestr2=time.split(' ')[0].split('-')
        timestr1.splice(2,1);
        timestr2.splice(0,1);
        // console.log(timestr1.join());
        let time1=timestr1.join().replace(',',':');
        let time2=timestr2.join().replace(',','.');
        return time2+' '+time1;
    },
    fnTime(time) {
      let ptime = new Date(time).getTime();
      const twentyFourHours = 24 * 60 * 60 * 1000;
      const fortyEightHours = 24 * 60 * 60 * 1000 * 2;
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const today = `${year}-${month}-${day}`;
      const todayTime = new Date(today).getTime();
      const yesterdayTime = new Date(todayTime - twentyFourHours).getTime();
      const lastYesterdayTime = new Date(todayTime - fortyEightHours).getTime();

      if (ptime >= todayTime) {
        return "今天 ";
      } else if (ptime < todayTime && yesterdayTime <= ptime) {
        return "昨天 ";
      } else if (ptime < yesterdayTime && lastYesterdayTime <= ptime) {
        return "前天 ";
      }
      else {
        let timestr=time.split(' ')[0].split('-')
        timestr.splice(1,0,'年')
        timestr.splice(3,0,'月')
        timestr.splice(5,0,'日')
        let time1=timestr.join().replace(/,/g,'');
        return time1;
      }
    }
  }
};
</script>

<style>
body {
  background-color: #f0f0f0;
}
.van-pull-refresh {
  margin-top: 10px;
}
.van-collapse-item__title {
  background-color: #f9f9f9;
}
.main {
  display: flex;
  padding: 5px 0;
  align-items: center;
}
.van-cell__title span {
  font-size: 16px;
  font-weight: bold;
}
.main:nth-child(2) {
  border-top: 1px solid #efefef;
}
.main .left img {
  width: 60px;
  height: 60px;
  border-radius: 5px;
}
.main .right {
  flex: 1;
  margin-left: 10px;
}
.main .right a {
  font-size: 12px;
  color: #d2d2d2;
  display: -webkit-box; /*作为弹性伸缩盒子模型显示*/
  -webkit-line-clamp: 1; /*显示的行数；如果要设置2行加...则设置为2*/
  overflow: hidden; /*超出的文本隐藏*/
  text-overflow: ellipsis; /* 溢出用省略号*/
  -webkit-box-orient: vertical; /*伸缩盒子的子元素排列：从上到下*/
}
.main .right .title {
  font-size: 16px;
  color: #000;
}
.van-collapse-item__content {
  padding: 0 16px;
}
</style>