<template>
  <div class="footer-wrap clearfix">
    <div class="footer-top">
      <div class="footer-left">
        <h3>帮助我们</h3>
        <div class="footer-left-inner">
          <div>
            <img src="../assets/images/footicon1.png" alt />
            <span>购物指南</span>
          </div>
          <div>
            <img src="../assets/images/footicon2.png" alt />
            <span>购物指南</span>
          </div>
          <div>
            <img src="../assets/images/footicon3.png" alt />
            <span>购物指南</span>
          </div>
          <div>
            <img src="../assets/images/footicon4.png" alt />
            <span>购物指南</span>
          </div>
          <div>
            <img src="../assets/images/footicon5.png" alt />
            <span>购物指南</span>
          </div>
          <div>
            <img src="../assets/images/footicon6.png" alt />
            <span>购物指南</span>
          </div>
          <div>
            <img src="../assets/images/footicon7.png" alt />
            <span>购物指南</span>
          </div>
          <div>
            <img src="../assets/images/footicon8.png" alt />
            <span>购物指南</span>
          </div>
        </div>
      </div>
      <div class="footer-med">
        <h3>关注我们</h3>
        <div>
          <img src="../assets/images/footicon9.png" alt />
          <img src="../assets/images/footicon10.png" alt />
        </div>
      </div>
      <div class="footer-right">
        <h3>客服热线</h3>
        <div>
          <img src="../assets/images/footicon5.png" alt />
          <div>
            <span>400 113 5353</span>
            <p>[周一至周五 9:00-18:00]</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div>
        <img src="../assets/images/logo3.png" alt />
        <p>北京开普勒发展有限公司@版权所有</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-wrap"
};
</script>

<style>
.footer-wrap {
  width: 100%px;
  background-color: #000;
}
.footer-top {
  margin: 0 auto;
  width: 1200px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
}
.footer-top > div {
  padding-top: 58px;
  padding-left: 100px;
  width: 400px;
}
.footer-top div h3 {
  margin-left: 50px;
  padding-bottom: 26px;
  font-size: 24px;
  color: #fff;
}

.footer-left > div {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  padding-left: 50px;
}
.footer-left > div > div {
  width: 110px;
  margin-bottom: 5px;
}
.footer-left > div > div > span {
  color: #fff;
  line-height: 30px;
  text-align: center;
}
.footer-left > div > div > img {
  margin-right: 10px;
}
.footer-med > div > img:first-child {
  margin-right: 30px;
}
.footer-right > div {
  display: flex;
  justify-content: space-around;
}
.footer-right > div > img {
  width: 26px;
  height: 26px;
}
.footer-right > div > div {
  width: 250px;
}
.footer-right > div > {
  float: left;
}
.footer-right > div > div > span {
  color: #fff;
  line-height: 30px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}
.footer-right > div > div > p {
  display: block;
  float: left;
  color: #fff;
  line-height: 20px;
  text-align: center;
  font-size: 14px;
}
.footer-bottom {
  background-color: #2b2e33;
}
.footer-bottom > div {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.footer-bottom > div img {
  padding: 10px;
}
.footer-bottom > div > p {
  display: block;
  width: 500px;
  color: #888888;
}
</style>
