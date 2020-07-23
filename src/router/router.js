import Vue from 'vue';
import Router from 'vue-router';
import list from '../view/list/list.vue';
import index from '../view/home/index';
import home from '../view/home/com/home.vue';
import study from '../view//home/com/study.vue';


Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/list',
            component:list
        },
        {
            path: '/index',
            component: index,
            children:[
                {
                    path:'home',
                    component:home
                },
                {
                    path:'study',
                    component:study
                }
            ]
        }
    ]
})
export default router