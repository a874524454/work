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
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(VueI18n)
Vue.use(ElementUI, { zhLocale });
Vue.use(VueDirectiveImagePreviewer) 
Vue.use(less)
Vue.use(ElementUI)
function aca() {
  return VueCookies.get('DefaultLanguage') == null ? 'zh-CN' : VueCookies.get('DefaultLanguage');
}
console.log(aca());
 const i18n = new VueI18n({
  locale:aca(),
  // locale:this.$cookies.get("DefaultLanguage")||'zh-CN',
  messages: {
    'en-US': Object.assign(require("../static/lang/en"),enLocale),
    'zh-CN': Object.assign(require("../static/lang/zh"),zhLocale)
  }
});
locale.i18n((key, value) => i18n.t(key, value));

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
