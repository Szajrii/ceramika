import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
require ('./style/style.css');

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
