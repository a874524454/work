import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue';
import './rem/rem.js'
import 'amfe-flexible';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import dayjs from 'dayjs'
import Axios from 'axios'
dayjs().format();
Vue.use(ElementUI);
Vue.use(Vant)
Vue.prototype.$axios = Axios;
Vue.filter('formDate', function(val) {
  return dayjs(val)
})
new Vue({
  render: h => h(App),
}).$mount('#app')
