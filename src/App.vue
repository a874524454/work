<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
methods:{
  toM(){
  this.$router.push({
  path:'/music',
  query:{
  userid:0
  }
})
  }
}
}
</script>

<style>

</style>