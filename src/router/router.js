import Vue from 'vue'
import List from '../view/list/list.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path:'/',
    redirect:'/list'
},{
    path:'/list',
    component:List
}]
const router=new VueRouter({
    routes
})
export default router