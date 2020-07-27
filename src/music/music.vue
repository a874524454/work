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
        <van-collapse v-model="activeNames"  @scroll="scrollEvent($event)">
        <el-button v-if="activeName.length === -1" size="small" icon="el-icon-third-plus-arrow-down" @click="allExpand">全部展示</el-button>
          <van-collapse-item v-for="(value,key,index) in List" :key='index' :name="index" @change='change(val)'>
            <template slot="title">{{key | fnTime}}</template>
            <div class="main" v-for="(avalue,aindex) in value" :key='aindex'>
              <div class="left">
                <img src="../assets/img.png" alt />
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
import {typeList} from '../utils/type'
import Axios from "axios";
export default {
  data() {
    return {
    //   activeNames: ['index'],
      activeNames: [0,1,2,3,4],
      typeList: [],
      // typeList: typeList,
      loading: false,
      finished: false,
      refreshing: false,
      page: 0,
      userid:this.$route.query.userid,
      end:[],
      pagesize:3,
      List:{}
    };
  },
  created(){
    this.allExpand()
  },
  methods: {
    change(val){
      console.log(val);
    },
    allExpand(){
      this.activeName = [] // 注意：由于每点开一个的单独面板 activeName都会发生变化，所以点击全部展开的时候要将activeName置空
      for (const collapseTitleData of this.List) {
        this.activeName.push(collapseTitleData.id)
      }
    },
      scrollEvent(e){
          console.log(e);
      },
      getIndex(index){
        console.log(index);
      },
      handleChange(val){
        console.log(val);
      },
    refresh() {
        this.List = {};
        console.log(this.List);
        this.page = 1;
        this.loading = true;
        this.refreshing = false;
        this.finished = false;
        this.getType();

    },
    onLoad() {
        this.getType()
        this.loading = true;
        if(!this.activeNames.includes(''+2)){
            this.loading=false
            return
        }
    },
    async getType() {
      let data = await Axios({
        url: "/sapi/upfiles/query",
        method: "POST",
        data: {
          where: {
            userid:this.userid
          },
          page: {
            page: this.page,
            pagesize:this.pagesize
          }
        }
      });
    //   console.log(data);
      console.log(data.data.data.files);
      if(data.data.data.files){
      this.typeList = [...this.typeList,...data.data.data.files];
      this.typeList=new Set(this.typeList)
      console.log(this.typeList);
      let obj = {};
      this.typeList.forEach((val, key) => {
         let time = val.uploadtime.split(' ');
         let year = time[0];
         val.uploadtime = time.join(" ")
         let date = new Date(val.uploadtime); 
         val.timestamp = Date.parse(date);

         if(obj[year]) {
            obj[year].push(val)
            obj[year].sort(function(a, b){
               return a.timestamp - b.timestamp
            })
         } else {
            obj[year] = []
            obj[year].push(val)
         }
       })
    //   this.List=Object.values(obj)
      this.List=obj
    //    console.log(obj);
      console.log(this.List);
      console.log(Object.values(obj).concat())
      console.log(Object.values(obj).length)
      this.loading=false
      this.finished=false
      this.page=this.page+1
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
.van-cell__title{
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