import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../src/login/login.vue'
import home from '../src/home/home.vue'
import index from '../src/home/info/index.vue'
import information from '../src/home/information/index.vue'
import notation from '../src/home/notation/index.vue'
import vote from '../src/home/vote/index.vue'
import info1 from '../src/home/info/info1/info.vue'
import info2 from '../src/home/info/info2/info2.vue'
import index1 from '../src/home/vote/com/index1.vue'

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
          redirect: 'index'
        },
        {
          path: 'index',
          component: index,
          children:[
            {
              path: '/home/index',
              redirect: 'info1'
            },
            {
              path: 'info1',
              component:info1
            },
            {
              path: 'info2',
              component:info2
            }
          ]
        },
        {
          path: 'information',
          component: information
        },
        {
          path: 'notation',
          component: notation 
        },
        {
          path: 'vote',
          component: vote
          
        },
        {
          path: 'index1',
          component:index1
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