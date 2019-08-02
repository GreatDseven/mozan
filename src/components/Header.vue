<template>
  <div class="header-wrap">
    <div class="header-top">
      <div class="header-nav">
        <div class="nav-left">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <div class="nav-logo">
          <router-link to="/">
            <img src="http://image.morethan.cc/template/index/default/index1/images1/logo.png" alt />
          </router-link>
        </div>
        <div class="nav-right">购物车</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-top"
};
</script>

<style>
.header-top {
  width: 100%;
}
.header-top .header-nav {
  height: 54px;
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999999;
  min-width: 1200px;
  display: flex;
  justify-content: space-around;
}
.header-top .header-nav .nav-left {
  width: 32px;
  height: 26px;
  padding: 14px 32px 14px 39px;
  /* border-right: 2px solid #262626; */
}
.header-top .header-nav .nav-left .bar {
  width: 37px;
  height: 5px;
  background: #888888;
  margin-top: 5px;
  border-radius: 3px;
}
.header-top .header-nav .nav-left .bar:first-child {
  margin-top: 0;
}
.header-top .header-nav .nav-logo img {
  display: block;
  width: 135px;
  height: 45.44px;
  text-align: center;
}
.header-top .header-nav .nav-right {
  color: #fff;
}
</style>
