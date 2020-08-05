<template>
  <div class="p">
 <div class="header">
    画板批注
  </div>
  <div class="main">
    <div class="pizhu">
      aaaaaaa
    </div>
  </div>
  <div class="footer">
    <van-pagination v-model="currentPage" :page-count="12" mode="simple"/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentPage:1,
      notation:[],
       radio: '1',
       cities: [{
          value: 'agree',
          label: '赞同'
        }, {
          value: 'abstention',
          label: '弃权'
        }, {
          value: 'against',
          label: '反对'
        }],
        value: ''
    }
  }
}
</script>

<style lang='less' scoped>

.p{
  height:100%;
  display: flex;
  flex-direction: column;
  position: relative;
  .header{
    padding-left: 10px;
    background-color: #efefef;
    font-size: 18px;
  }
  .main{
    padding-left: 15px;
    height: 100%;
    font-size: 16px;
    margin-bottom: 40px;
  }
  .footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 35px;
  }
}


.van-field{
  padding: 0;
  font-size: 12px;
}

</style>
