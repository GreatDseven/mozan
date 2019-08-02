<template>
  <div class="shopping-wrap">
    <div class="shopping-top">
      <div class="shopping-gouwuche">
        <h3>购物车</h3>
        <span>[99]件</span>
      </div>
      <div class="shopping-dingdan">
        <a href>购物车</a>
        <a href>填写订单</a>
        <a href>付款,购买成功</a>
      </div>
    </div>
    <div class="shopping-main" v-if="goods.length">
      <div class="shopping-main-nav">
        <label class="text">
          <span :class="checkall ? 'active':''">√</span>
        </label>
        <span>全选</span>
        <span>商品</span>
        <span>单价</span>
        <span>数量</span>
        <span>小计</span>
        <span>操作</span>
      </div>
      <ul>
        <li v-for="good in goods" :key="good.id">
          <div>
            <label class="text">
              <span :class="good.checked ? 'active':''">√</span>
            </label>
            <img :src="good.src" alt />
          </div>
          <div>
            <h3>龙之谷六周年限定礼包大Boss冰龙款男士T恤</h3>
            <p>款式 : {{good.kuanshi}}</p>
            <p>尺码 : {{good.size}}</p>
          </div>
          <div>
            <span>${{good.price}}</span>
            <button @click="addCart(good.id)">+</button>
            <p>{{good.num}}</p>
            <button @click="subCart(good.id)">-</button>
          </div>
          <div>
            <p>${{good.price*good.num}}</p>
            <span>X</span>
          </div>
        </li>
        <li>
          <span>全选</span>
          <span>删除</span>
          <span>转到愿望单</span>
          <span>共件商品</span>
          <span>已选择件</span>
          <span>合计 : {{}}</span>
          <router-link to="/order">去结算</router-link>
        </li>
      </ul>
    </div>
    <div v-else class="qingshaodeng">买点</div>
  </div>
</template>

<script>
export default {
  name: "shopping-wrap",
  data() {
    return {
      checkall: true
    };
  },
  computed: {
    goods() {
      return this.$store.state.goods;
    }
  },
  methods: {
    addCart(id) {
      return this.$store.commit("addCart", id);
    },
    subCart(id) {
      return this.$store.commit("subCart", id);
    }
  }
};
</script>

<style>
.shopping-wrap {
  padding-top: 54px;
  background-image: url("../assets/images/cart_bgc.png");
  background-position: center;
  background-repeat: repeat;
}
.shopping-top {
  width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
  background-image: url("../assets/images/cart_bgc2.png");
  display: flex;
  justify-content: space-between;
}
.shopping-gouwuche {
  width: 200px;
  margin-left: 100px;
  display: flex;
}
.shopping-gouwuche h3 {
  font-size: 20px;
  border-left: 3px solid #000;
  padding-left: 10px;
}
.shopping-gouwuche span {
  line-height: 20px;
  text-align: center;
  margin-top: 2px;
  margin-left: 5px;
}
.shopping-dingdan {
  width: 300px;
  display: flex;
}
.shopping-dingdan a {
  display: block;
  /* width: 90px; */
  margin-left: 10px;
  padding-bottom: 5px;
  color: #000;
  border-bottom: 2px solid #000;
}
.shopping-dingdan a:first-child {
  border-bottom: 4px solid #000;
}
.shopping-main {
  width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
  background-color: #fff;
}
.shopping-main-nav {
  border-bottom: 2px solid #2b2e33;
  padding-bottom: 9px;
  display: flex;
  justify-content: flex-start;
}
.shopping-main-nav > span {
  color: #000;
  font-size: 16px;
  font-weight: bold;
}
.shopping-main-nav .text {
  display: block;
  width: 25px;
  height: 25px;
  border: 2px solid #babec9;
  text-align: center;
  margin-left: 25px;
}
.shopping-main-nav .text > span {
  display: block;
  width: 23px;
  height: 23px;
  text-align: center;
  display: none;
}
.shopping-main-nav .text > span.active {
  display: block;
}
.shopping-main-nav span:nth-child(2) {
  margin-left: 25px;
}
.shopping-main-nav span:nth-child(3) {
  margin-left: 35px;
}
.shopping-main-nav span:nth-child(4) {
  margin-left: 500px;
}
.shopping-main-nav span:nth-child(5) {
  margin-left: 100px;
}
.shopping-main-nav span:nth-child(6) {
  margin-left: 100px;
}
.shopping-main-nav span:nth-child(7) {
  margin-left: 60px;
}
.shopping-main ul li {
  padding: 20px 0;
  border-bottom: 1px solid #d1d7e3;
  display: flex;
  justify-content: flex-start;
}
.shopping-main ul li:last-child {
  border-bottom: 0;
  border-top: 2px solid #2b2e33;
}
.shopping-main ul li h3 {
  width: 240px;
  color: #393c41;
  font-size: 14px;
  padding: 10px 0;
  font-weight: bold;
}
.shopping-main ul li div:nth-child(1) .text {
  display: block;
  width: 25px;
  height: 25px;
  border: 2px solid #babec9;
  text-align: center;
  margin-left: 25px;
  margin-top: 35px;
  margin-right: 10px;
}
.shopping-main ul li div:nth-child(1) .text > span {
  display: block;
  width: 23px;
  height: 23px;
  text-align: center;
  display: none;
}
.shopping-main ul li div:nth-child(1) .text > span.active {
  display: block;
}
.shopping-main ul li div:nth-child(2) p {
  width: 240px;
  color: #393c41;
  font-size: 12px;
  padding-bottom: 5px;
}
.shopping-main ul li div:nth-child(1) {
  display: flex;
  justify-content: space-between;
}
.shopping-main ul li div:nth-child(2) {
  margin-left: 40px;
  margin-right: 230px;
}
.shopping-main ul li div:nth-child(3) {
  width: 200px;
  padding-top: 35px;
  display: flex;
  justify-content: flex-start;
}
.shopping-main ul li div:nth-child(3) span {
  margin-right: 75px;
}
.shopping-main ul li div:nth-child(3) button {
  width: 20px;
  height: 20px;
}
.shopping-main ul li div:nth-child(4) {
  display: flex;
  justify-content: space-between;
  padding-top: 35px;
  width: 200px;
  margin-left: 40px;
}
.shopping-main ul li div:nth-child(4) p {
  display: block;
  width: 40px;
  display: block;
  margin-left: 20px;
}
.shopping-main ul li div:nth-child(4) span {
  width: 40px;
  display: block;
  margin-right: 20px;
}
</style>
