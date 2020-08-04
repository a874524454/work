<template>
  <div class="p">
      <!-- <van-field name="radio" label="单选框">
  <template #input>
    <van-radio-group v-model="radio" direction="horizontal">
      <van-radio name="1">同意</van-radio>
      <van-radio name="2">反对</van-radio>
    </van-radio-group>
  </template>
    </van-field>
    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </el-option>
  </el-select> -->
  <div class="header">
    画板批注
  </div>
  <div class="main">
    ddddd
  </div>
    <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
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

<style scoped>
.van-field{
  padding: 0;
  font-size: 12px;
}
</style>
