import Vue from 'vue'
import App from './App.vue'
import start from './assets/css/start.css'
import moment from 'moment'
import { Button } from 'element-ui'
import router from './router'
import store from './store/index'
import PUBLICURL from './publicurl'
Vue.prototype.$publicUrl = PUBLICURL
Vue.config.productionTip = false
Vue.use(start)
Vue.use(Button)
Vue.prototype.$moment = moment
new Vue({
  // el: '#app',
  render: h => h(App),
  router,
  store
}).$mount('#app')
