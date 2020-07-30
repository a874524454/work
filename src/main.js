import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue';
import 'amfe-flexible';
import axios from 'axios'
import router from './router/router.js'
import $ from 'jquery'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Vant)
window.$=$
Vue.prototype.$http = axios;

new Vue({
  router,
  components:{
    App
  },
  render: h => h(App),
}).$mount('#app')
