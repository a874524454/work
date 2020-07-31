import Vue from 'vue';
import App from './App.vue';
import './rem/rem.js'
import 'amfe-flexible';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import router from '../router/router'
import less from 'less'
Vue.use(less)
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
