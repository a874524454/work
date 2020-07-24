<template>
  <div id="app">
    <van-pull-refresh v-model="refreshing" @refresh="refresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" offset='0'>
        <van-collapse v-model="activeNames">
          <van-collapse-item v-for="(item,index) in typeList" :key="index" :title="item.uploadtime" :name="index">
            <div class="main">
              <div class="left"><img src="./assets/img.png" alt=""></div>
              <div class="right">
                <a class="title">{{item.filename}}</a>
                <a>{{formatBytes(item.filesize)}}</a>
                <a>{{item.uploadtime}}</a>
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
import {apiGetType} from './api/article'
import Axios from 'axios';
export default {
  data() {
    return {
      activeNames: ["1"],
      typeList:[
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.40.104:8875/download/record/20200724/5e4e7c980076c17dbc01904a2de9737a.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1036,
        "keypath": "record/20200724/5e4e7c980076c17dbc01904a2de9737a.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-24 14:49:54",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.40.104:8875/download/record/20200724/5ab8ab241a93bb949f4326f665f8c23e.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1035,
        "keypath": "record/20200724/5ab8ab241a93bb949f4326f665f8c23e.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-24 14:49:53",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.40.104:8875/download/record/20200724/e2a7ed7ce27b174deb1b51626b9f9755.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1034,
        "keypath": "record/20200724/e2a7ed7ce27b174deb1b51626b9f9755.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-24 14:49:53",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.40.104:8875/download/record/20200724/7d6fe21cee40562b8bec201200923465.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1033,
        "keypath": "record/20200724/7d6fe21cee40562b8bec201200923465.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-24 14:49:53",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.40.104:8875/download/record/20200724/cee5e19eede310bd6f44a45841a5f78a.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1032,
        "keypath": "record/20200724/cee5e19eede310bd6f44a45841a5f78a.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-24 14:49:53",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.40.104:8875/download/record/20200724/4831ac31a430421a532f5d3149308395.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1031,
        "keypath": "record/20200724/4831ac31a430421a532f5d3149308395.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-24 14:49:52",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.40.104:8875/download/record/20200724/a7038a2437f9a8bc3098eb5a1d57f59a.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1030,
        "keypath": "record/20200724/a7038a2437f9a8bc3098eb5a1d57f59a.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-24 14:49:52",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.40.104:8875/download/record/20200724/9aab1d2972c492c0c852da6f92a23d95.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1029,
        "keypath": "record/20200724/9aab1d2972c492c0c852da6f92a23d95.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-24 14:49:52",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.40.104:8875/download/record/20200724/1fb4e94e97717c63a83b3cfcb17dc21d.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1028,
        "keypath": "record/20200724/1fb4e94e97717c63a83b3cfcb17dc21d.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-24 14:49:52",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.40.104:8875/download/record/20200724/0a3647e07b18720715ebc46e6d882677.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1027,
        "keypath": "record/20200724/0a3647e07b18720715ebc46e6d882677.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-24 14:49:51",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.40.104:8875/download/record/20200724/0ebf0b6895f86b02d371380a322b0914.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1026,
        "keypath": "record/20200724/0ebf0b6895f86b02d371380a322b0914.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-24 14:49:51",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/332c796be1c2e6faa74d32c5c0c94961.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1025,
        "keypath": "record/20200723/332c796be1c2e6faa74d32c5c0c94961.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:45",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/9517e4c90d39b5e4d36c90b8d810ee7d.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1024,
        "keypath": "record/20200723/9517e4c90d39b5e4d36c90b8d810ee7d.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:45",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/6f2453f6e365a6bf2d854600215de3fe.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1023,
        "keypath": "record/20200723/6f2453f6e365a6bf2d854600215de3fe.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:45",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/4fc6ae6a976be00b82d3751a547c0e41.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1022,
        "keypath": "record/20200723/4fc6ae6a976be00b82d3751a547c0e41.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:44",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/86fe7e54a122d36d604ae68e438540c6.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1021,
        "keypath": "record/20200723/86fe7e54a122d36d604ae68e438540c6.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:44",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/f535183e69d0a093f40d8330dcb14ed3.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1020,
        "keypath": "record/20200723/f535183e69d0a093f40d8330dcb14ed3.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:44",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/bad52f22ebb5c95900f02a4ee71e5348.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1019,
        "keypath": "record/20200723/bad52f22ebb5c95900f02a4ee71e5348.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:44",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/57485e3d5d4a7f0d75861feda22dceda.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1018,
        "keypath": "record/20200723/57485e3d5d4a7f0d75861feda22dceda.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:44",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/d3494e71ea3a951f6c4f7d32de25e0a8.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1017,
        "keypath": "record/20200723/d3494e71ea3a951f6c4f7d32de25e0a8.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:44",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/e573267dcb33037cb3a9b4f3de5a2b2e.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1016,
        "keypath": "record/20200723/e573267dcb33037cb3a9b4f3de5a2b2e.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:43",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/204ef5d9ef4828b464e6da4a5db506df.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1015,
        "keypath": "record/20200723/204ef5d9ef4828b464e6da4a5db506df.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:43",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/6082759df8ed7fab5591e9c46ef7a6ec.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1014,
        "keypath": "record/20200723/6082759df8ed7fab5591e9c46ef7a6ec.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:43",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/b491bf4dcc381c702e394050c54e025b.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1013,
        "keypath": "record/20200723/b491bf4dcc381c702e394050c54e025b.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:43",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/712d0dccce2b16961cb17ccd263267d7.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1012,
        "keypath": "record/20200723/712d0dccce2b16961cb17ccd263267d7.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:43",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/86d42bb924364d34e8826cb863e71f0e.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1011,
        "keypath": "record/20200723/86d42bb924364d34e8826cb863e71f0e.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:42",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/10173e50ed8dca29f3780b29fda0b0e4.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1010,
        "keypath": "record/20200723/10173e50ed8dca29f3780b29fda0b0e4.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:42",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/4b9ac258867751565255ebaa2a6070c5.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1009,
        "keypath": "record/20200723/4b9ac258867751565255ebaa2a6070c5.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:42",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/1739b439aeba9d4aff962a3fdea644d3.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1008,
        "keypath": "record/20200723/1739b439aeba9d4aff962a3fdea644d3.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:42",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/bd07200a392aaf120c8bad12b42dba2c.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1007,
        "keypath": "record/20200723/bd07200a392aaf120c8bad12b42dba2c.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:41",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/fc4d2a0a28821632e0e4434610eecb6f.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1006,
        "keypath": "record/20200723/fc4d2a0a28821632e0e4434610eecb6f.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:41",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/60abb9ba7b93754e68fad651e8e42a95.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1005,
        "keypath": "record/20200723/60abb9ba7b93754e68fad651e8e42a95.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:40",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/8d93c158e6f8892fcd830123c92af71e.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1004,
        "keypath": "record/20200723/8d93c158e6f8892fcd830123c92af71e.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:38",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/a030e2a2a7dfef3e812c0d32000a2a3f.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1003,
        "keypath": "record/20200723/a030e2a2a7dfef3e812c0d32000a2a3f.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:36",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/f608869a626b2cf559c2faa9731945c1.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1002,
        "keypath": "record/20200723/f608869a626b2cf559c2faa9731945c1.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:32",
        "uploaduser": 0
      },
      {
        "filename": "recordtip.mp3",
        "filepath": "http://192.168.0.167:8875/download/record/20200723/9844dbefd43bf02cf3e9179ccbb2217a.mp3",
        "filesize": 9341,
        "filetype": 0,
        "id": 1001,
        "keypath": "record/20200723/9844dbefd43bf02cf3e9179ccbb2217a.mp3",
        "metainfo": null,
        "mimetype": "",
        "refcount": 0,
        "uploadtime": "2020-07-23 19:08:23",
        "uploaduser": 0
      }
    ],
      loading: false,
      finished: false,
      refreshing: false,
      totalPage: 0,
      currentPage: 1,
      isLoading: false,
      page:1,
      length:0
      // userid:this.$route.query.id
    };
  },
  created(){
    this.getType()
    console.log(dayjs());
    console.log(bytesToSize(1024));
  },
  methods: {
    refresh() {
      setTimeout(() => {
        this.typeList = [];
        this.page=1
        this.loading = true;
        this.refreshing = false;
        this.finished=false
        this.getType();
      }, 1000);
    },
    onLoad() {
      setTimeout(() => {
        this.finished=false
        this.page=this.page+1
        this.getType()
        this.loading = false;
        // 加载状态结束
        if(this.length != 5){
        this.finished = true;
        }
      }, 2000);
      
    },
    async getType(){
      let data = await Axios({
        url:'/sapi/upfiles/query',
        method:"POST",
        data:{
          "where":{
          userid:0
          },
          // userid:this.userid,
          "page":{
          page:this.page,
          pagesize:5
          }
        }
      })
      console.log(data.data.data.files);
      this.typeList=[...this.typeList,...data.data.data.files]
      this.length=data.data.data.files.length
      console.log();
      console.log(this.length);
      console.log(this.typeList);
    },servertime2Jstime(timestr){
    if (!timestr) {
        return new Date();
    }
    var t = Date.parse(timestr);
    if (!isNaN(t)) {
        return new Date(Date.parse(timestr.replace(/-/g, "/")));
    } else {
        return new Date();
    }
  },formatBytes(a,b){if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]}
},
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
.main .left img{
  width: 50px;
  height: 50px;
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
