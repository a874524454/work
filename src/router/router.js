import Vue from 'vue'
import VueRouter from 'vue-router'
import music from '../music/music.vue'

Vue.use(VueRouter)
const routes =[
    {
    path: '/music',
    component:music
    }
  ]
  
  const router = new VueRouter({
    mode: 'history',
    routes 
  })

  export default router