import Vue from 'vue'
import VueRouter from 'vue-router'
import Section from './components/Section.vue'
import Cart from './components/Cart.vue'
import Shopping from './components/Shopping.vue'
import Order from './components/Order.vue'
import Pay from './components/Pay.vue'
import PayDone from './components/PayDone.vue'
import Qr from './components/Qr.vue'
import SuccessPay from './components/SuccessPay.vue'
import PUBLICURL from './publicurl'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: PUBLICURL + '/',
      component: Section
    },
    {
      path: PUBLICURL + '/cart',
      component: Cart
    },
    {
      path: PUBLICURL + '/shopping',
      component: Shopping
    },
    {
      path: PUBLICURL + '/order',
      component: Order
    },
    {
      path: PUBLICURL + '/pay',
      component: Pay
    },
    {
      path: PUBLICURL + '/paydone',
      component: PayDone
    },
    {
      path: PUBLICURL + '/qr',
      component: Qr
    },
    {
      path: PUBLICURL + '/successPay',
      component: SuccessPay
    }
  ],
  mode: 'history'
})
