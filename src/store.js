import Vue from 'vue'
import Vuex from 'vuex'
import src from './assets/images/cart_1.png'
Vue.use(Vuex, src)

const store = new Vuex.Store({
  state: {
    goods: [
      {
        id: '123',
        num: '1',
        src: src,
        kuanshi: 'iphone 5',
        size: 'XL',
        price: '79.00',
        checked: true
      },
      {
        id: '1223',
        num: '2',
        src: src,
        kuanshi: 'iphone 6',
        size: 'XXL',
        price: '179.00',
        checked: true
      },
      {
        id: '1232',
        num: '2',
        src: src,
        kuanshi: 'iphone x',
        size: 'XXXL',
        price: '379.00',
        checked: false
      }
    ]
  },
  mutations: {
    addCart(state, id) {
      state.goods.find(item => item.id === id).num++
    },
    subCart(state, id) {
      if (state.goods.find(item => item.id === id).num > 1) {
        state.goods.find(item => item.id === id).num--
      }
    }
  }
})
export default store
