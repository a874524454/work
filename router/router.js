import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../src/login/login.vue'
import home from '../src/home/home.vue'
import index from '../src/home/com/index.vue'

Vue.use(VueRouter)
const routes =[
    {
    path: '/',
    component:login
    },
    {
    path: '/login',
    component:login
    },
    {
      path: '/home',
      component:home,
      children: [
        {
          path: '/',
          redirect: '/home/index'
        },
        {
          path: 'index',
          component: index 
        }
      ]
    }
  ]
  
  const router = new VueRouter({
    mode: 'history',
    routes 
  })
  const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
  export default router