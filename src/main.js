import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue';
import 'amfe-flexible';
import Axios from 'axios'
import router from './router/router.js'
Vue.use(Vant)
Vue.prototype.$axios = Axios;
new Vue({
  router,
  components:{
    App
  },
  render: h => h(App),
}).$mount('#app')
