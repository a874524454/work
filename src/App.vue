<template>

  <div id="app">
    <van-pull-refresh v-model="refreshing" @refresh="refresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :offset="1"
      >
        <van-collapse v-model="activeNames">
          <van-collapse-item v-for="(value,key,index) in List" ref='index' :key="index" :name="index">
            <template slot="title">{{key | fnTime}}</template>
            <div
              class="main"
              v-for="(avalue,aindex) in value"
              :key="aindex"
              @click="download()"
            >
              <div class="left">
                <img src="../src/assets/img.png" alt />
              </div>
              <div class="right">
                <a class="title">{{avalue.filename}}</a>
                <a>{{formatBytes(avalue.filesize)}}</a>
                <a>{{avalue.uploadtime | servertime2Jstime}}</a>
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
export default {
  data() {
    return {
      activeNames: [],
      typeList: [],
      loading: false,
      finished: false,
      refreshing: false,
      page: 0,
      userid: this.$route.query.userid,
      end: [],
      pagesize: 3,
      List: {},
      show: false,
      tableDataArr:[],
      number:[],
      teauserid:this.$route.query.teauserid,
      isLoading:true
    };
  },
  created(){
    let urlp=url.parseURL(window.location.href);
    this.userid=urlp['userid']
    this.teauserid=urlp['teauserid']
  },
  methods: {
    download(v) {
      window.location.href = v;
    },
    add(){
      let a=Object.keys(this.List)
      a.forEach((val,index)=>{
        if(this.activeNames.includes(index)){
          return
        }else if(this.activeNames.includes(index+1)||this.activeNames.includes(index-1)&&this.finished){
          return
        }
        this.activeNames.push(index)
      })
    },
    refresh() {
      this.List = {};
      this.activeNames=[]
      this.page = 1;
      this.loading = true;
      this.refreshing = false;
      this.finished = false;
      this.getType();
    },
    onLoad() {
      let a=Object.keys(this.List)
      if(a.length>0){
      let b=[]
      a.forEach((val,index)=>{
        b.push(index)
      })
      b.sort(function (a, b) {
        return b-a;
      })
      let max=b[0]
      this.isLoading=this.$refs.index[max].expanded
      }
      if(this.isLoading){
      if(a.length-1>0){
        if(this.activeNames.includes(Object.keys(this.List).length-1)){
        this.loading = true;
        this.getType();
        }else{
          return
        }
        }else{
        this.loading = true;
        this.getType();
        }}else{
          this.loading=false
          return
        }
    },
    getType() {
      if(this.loading){
        let obj=  {}
        let orarray = [] 
        if (this.userid){
          orarray.push({
            userid:this.userid
          })
        }
        if(this.teauserid){
          orarray.push({
            teauserid:this.teauserid
          })
        }
        obj['where'] = {
          or:orarray
        }
        obj['page']={
          page:this.page,
          pagesize:this.pagesize
        }
        let url='/sapi/upfiles/query'
        url.parseURL = (url) => {
          var query = url && url.split('?')[1]
          var queryArr = query && query.split('&')
          var params = {}
          queryArr &&
          queryArr.forEach(function (item) {
          var key = item.split('=')[0]
          var value = item.split('=')[1]
          params[key] = value
        })
          return params
      }
      this.$http.post(url,{
         obj
      })
      .then(res=>{
        if(res.data.code!=0){
          this.$message.error('进入失败')
        }
        console.log(res);
        this.typeList = [...this.typeList, ...res.data.data.files];
        this.typeList = new Set(this.typeList);
        let obj = {};
        this.typeList.forEach((val, key) => {
          let time = val.uploadtime.split(" ");
          let year = time[0];
          val.uploadtime = time.join(" ");
          let date = new Date(val.uploadtime);
          val.timestamp = Date.parse(date);
          if (obj[year]) {
            obj[year].push(val);
            obj[year].sort(function (a, b) {
              return a.timestamp - b.timestamp;
            });
          } else {
            obj[year] = [];
            obj[year].push(val);
          }
        });
        this.List = obj;
        
        this.loading = false;
        this.finished = false;
        this.add()
        this.page = this.page + 1;

      })
      .catch(res=>{
        let tips='异常'
        this.$message.error(tips)
      })
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
    },
  },
  filters: {
    servertime2Jstime: function (time) {
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

      let timestr1 = time.split(" ")[1].split(":");
      let timestr2 = time.split(" ")[0].split("-");
      timestr1.splice(2, 1);
      timestr2.splice(0, 1);
      let time1 = timestr1.join().replace(",", ":");
      let time2 = timestr2.join().replace(",", ".");
      return time2 + " " + time1;
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
      } else {
        let timestr = time.split(" ")[0].split("-");
        timestr.splice(1, 0, "年");
        timestr.splice(3, 0, "月");
        timestr.splice(5, 0, "日");
        let time1 = timestr.join().replace(/,/g, "");
        return time1;
      }
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
body {
  background-color: #f0f0f0;
}
.van-dialog__content {
  padding: 10px 20px;
}
.van-cell__title {
  font-size: 16px;
  font-weight: bold;
}
.van-pull-refresh {
  margin-top: 10px;
}
.van-cell--clickable {
  background-color: #f9f9f9;
}
.van-collapse-item__title {
  background-color: #f9f9f9;
}
.main {
  display: flex;
  padding: 5px 0;
  align-items: center;
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