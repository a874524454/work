<template>
<div class="p">
 <div class="header">
    画板批注
  </div>
  <div class="main">
    <!-- <div class="abc"> -->
    <div class="pizhu" v-for="(item,index) in 12" :key="index">
      <img v-image-preview src="../../assets/img.png" alt />
      <span>02.jpg</span>
    <!-- </div> -->
    </div>
  </div>
  
  <div class="footer">
    <van-pagination v-model="currentPage" :page-count="20" mode="simple"/>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentPage:1,
      numPages: 1,
    }
  }
}
</script>
<style lang="less">
@media (min-width: 1023px) {
  .p{
  height:calc(100vh-1.44rem);
  // min-height:1140px;
  min-height:100%;
  }
}
</style>
<style lang='less' scoped>
.p{
  display: flex;
  flex-direction: column;
  position: relative;
  height:calc(100vh-1.44rem);
  .abc {
    overflow: auto;
    height:700px
  }
  .header{
    padding-left: 10px;
    background-color: #efefef;
    font-size: 18px;
  }
  .main{
    height: 100%;
    font-size: 16px;
    margin-bottom: 45.5px;
  }
  .footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 35px;
  }
  .pizhu{
    padding: 10px;
    border-bottom: 1px solid black;
    img{
      width: 50px;
      height: 50px;
      vertical-align: middle;
    }
    span{
      margin-left: 10px;
    }
  }
}


.van-field{
  padding: 0;
  font-size: 12px;
}
</style>
