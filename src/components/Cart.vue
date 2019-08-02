<template>
  <div class="cart-wrap">
    <div class="cart-top">
      <div>
        <h3>已成功加入购物车！</h3>
      </div>
    </div>
    <div class="cart-med">
      <div class="cart-med-inner">
        <div class="cart-med-1">
          <img src="../assets/images/cart_1.png" alt />
        </div>
        <div class="cart-med-2">
          <h3>龙之谷六周年限定礼包大Boss冰龙款男士T恤</h3>
        </div>
        <div class="cart-med-3">
          <span>款式:iphone 5</span>
          <span>尺码:XL</span>
          <span>数量:1</span>
        </div>
        <div class="cart-med-4">
          <router-link to="/">返回</router-link>
          <router-link :to="$publicUrl + '/shopping'">去购物车结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  components: {}
};
</script>

<style>
.cart-wrap {
  padding-top: 54px;
  background-image: url("../assets/images/cart_bgc.png");
  background-position: center;
  background-repeat: repeat;
}
.cart-top {
  width: 1200px;
  margin: 0 auto;
  background-image: url("../assets/images/cart_bgc2.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.cart-top div h3 {
  padding: 50px 0 50px 30px;
  font-size: 20px;
}
.cart-med {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  padding-top: 50px;
  padding-bottom: 100px;
}
.cart-med-inner {
  margin-top: 50px;
  width: 1100px;
  margin: 0 auto;
  padding: 10px 50px;
  border-top: 2px solid #babec9;
  border-bottom: 2px solid #babec9;
  display: flex;
  justify-content: start;
}
.cart-wrap .cart-med-2 {
  width: 240px;
  margin: 30px 20px;
  border-right: 2px solid yellow;
}
.cart-wrap .cart-med-3 {
  width: 110px;
  flex-direction: column;
  margin-top: 20px;
}
.cart-wrap .cart-med-3 span {
  display: block;
  width: 110px;
  color: #2b2e33;
}
.cart-wrap .cart-med-4 {
  margin-top: 30px;
  margin-left: 200px;
  width: 350px;
  /* display: flex;
  justify-content: space-between; */
}
.cart-wrap .cart-med-4 a {
  display: block;
  float: left;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-color: #2b2e33;
  width: 120px;
  margin-left: 20px;
  line-height: 46px;
  text-align: center;
}
.cart-wrap .cart-med-4 a:last-child {
  width: 150px;
  background-color: #fcd901;
  color: #000;
}
</style>