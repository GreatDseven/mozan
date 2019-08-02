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
      path: '/cart',
      component: Cart
    },
    {
      path: '/shopping',
      component: Shopping
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/paydone',
      component: PayDone
    },
    {
      path: '/qr',
      component: Qr
    },
    {
      path: '/successPay',
      component: SuccessPay
    }
  ],
  mode: 'history'
})
