<template>
  <div id="app">
    <van-nav-bar title="录音" left-text="返回" left-arrow @click-left="back" />
    <van-pull-refresh v-model="refreshing" @refresh="refresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="今天" name="1">
            <div class="main">
              <div class="left"></div>
              <div class="right">
                <a class="title">李倩_同传训练_202007231111111</a>
                <a>100kb</a>
                <a>0601 18：18</a>
              </div>
            </div>
            <div class="main">
              <div class="left"></div>
              <div class="right">
                <a class="title">李倩-同传训练</a>
                <a>100kb</a>
                <a>0601 18：18</a>
              </div>
            </div>
          </van-collapse-item>
          <van-collapse-item v-for="(index,item) in list" :key="index" :title="item" :name="index">
            <div class="main">
              <div class="left"></div>
              <div class="right">
                <a class="title">李倩-同传训练</a>
                <a>100kb</a>
                <a>0601 18：18</a>
              </div>
            </div>
          </van-collapse-item>
        </van-collapse>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      totalPage: 0,
      currentPage: 1,
      isLoading: false,
      offset: 300,
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    back(){
      this.toast('返回');
    },

    refresh() {
      setTimeout(() => {
        this.list = [];
        this.loading = false;
        this.refreshing = false;
        this.onLoad();
      }, 1000);
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
  },
};
</script>

<style>
body{
 background-color: #f0f0f0;
}
.van-pull-refresh{
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
.main .left {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background-color: skyblue;
}
.main .right {
  flex: 1;
  margin-left: 10px;
}
.main .right a {
  display: block;
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
