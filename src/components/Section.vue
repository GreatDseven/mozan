<template>
  <div class="wrap">
    <div class="banner-wrap">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <img src="../assets/images/top_1.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/top_2.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/top_3.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/top_1.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/top_2.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/top_3.jpg" alt />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="section-wrap">
      <div class="section-left">
        <div class="section-left-1">
          <img src="../assets/images/banner_yushou.jpg" alt />
          <h3>龙之谷六周年限定礼包大Boss冰龙款男士T恤</h3>
        </div>
        <div class="section-left-two">
          <span>距预售结束</span>
          <div>{{countDownList}}</div>
          <p class="subtitle">
            <span>发表时间</span>
          </p>
        </div>
      </div>
      <div class="section-right clearfix">
        <div class="section-right-one clearfix">
          <div>
            <el-button size="mini" round>定金</el-button>
          </div>
          <div>
            <h3>￥500.00</h3>
            <p>全款金额￥:1500</p>
          </div>
        </div>
        <div class="section-right-two clearfix">
          <div>
            <el-button size="mini" round>款式</el-button>
          </div>
          <div>
            <span>iphone 5</span>
            <span>iphone 6</span>
            <span>iphone 6+</span>
          </div>
        </div>
        <div class="section-right-three clearfix">
          <div>
            <el-button size="mini" round>尺码</el-button>
          </div>
          <div>
            <span>xxs</span>
            <span>xs</span>
            <span>s</span>
            <span>m</span>
            <span>l</span>
            <span>xl</span>
            <span>xxl</span>
          </div>
        </div>
        <div class="section-right-four clearfix">
          <div>
            <el-button size="mini" round>数量</el-button>
          </div>
          <div class="shuliang">
            <span>-</span>
            <p>1</p>
            <span>+</span>
          </div>
        </div>
        <div class="section-right-five clearfix">
          <p>
            <span>注:</span> 商品将于
            <span>2016/10/5</span> 统一发货!
          </p>
        </div>
      </div>
      <div class="section-bottom clearfix">
        <router-link to="/Cart">立即订阅</router-link>

        <img src="../assets/images/section_1.jpg" alt />
        <img src="../assets/images/section_2.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "section-wrap",
  data() {
    return {
      countDownList: "00天00时00分00秒",
      actEndTime: "2019-11-19 18:50:00",
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        // loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created() {
    this.countDown();
  },
  methods: {
    timeFormat(param) {
      return param < 10 ? "0" + param : param;
    },
    countDown(it) {
      var interval = setInterval(() => {
        // 获取当前时间，同时得到活动结束时间数组
        let newTime = new Date().getTime(); // 对结束时间进行处理渲染到页面
        let endTime = new Date(this.actEndTime).getTime();
        let obj = null; // 如果活动未结束，对时间进行处理
        if (endTime - newTime > 0) {
          let time = (endTime - newTime) / 1000; // 获取天、时、分、秒
          let day = parseInt(time / (60 * 60 * 24));
          let hou = parseInt((time % (60 * 60 * 24)) / 3600);
          let min = parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
          let sec = parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
          obj = {
            day: this.timeFormat(day),
            hou: this.timeFormat(hou),
            min: this.timeFormat(min),
            sec: this.timeFormat(sec)
          };
        } else {
          // 活动已结束，全部设置为'00'
          obj = {
            day: "00",
            hou: "00",
            min: "00",
            sec: "00"
          };
          clearInterval(interval);
        }
        this.countDownList =
          obj.day + "天" + obj.hou + "时" + obj.min + "分" + obj.sec + "秒";
      }, 1000);
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style>
.wrap {
  background-image: url("../assets/images/banner_bg.png");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
}
.banner-wrap {
  width: 1200px;
  margin: 0 auto;
  margin-top: 54px;
  background-image: url("../assets/images/banner_beijing.jpg");
  padding: 30px 0;
}
.swiper-container {
  width: 1100px;
  height: 300px;
}
.section-wrap {
  width: 1200px;
  margin: 0 auto;
  background-color: #2b2e33;
}
.section-wrap .section-left {
  float: left;
  width: 520px;
  border-right: 2px solid #fff;
  margin-left: 50px;
  margin-top: 20px;
}
.section-wrap .section-left .section-left-1 {
  width: 630px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 60px;
}
.section-wrap .section-left .section-left-1 h3 {
  width: 330px;
  margin-right: 130px;
  color: #fff;
  font-size: 30px;
  line-height: 36px;
}
.section-wrap .section-right {
  width: 470px;
  float: right;
  margin-right: 50px;
  margin-top: 20px;
}
.section-wrap .section-right-one,
.section-wrap .section-right-two,
.section-wrap .section-right-three,
.section-wrap .section-right-five,
.section-wrap .section-right-four {
  width: 100%;
  padding-bottom: 20px;
}
.section-wrap .section-right > div > div:first-child {
  width: 60px;
  float: left;
}
.section-wrap .section-right > div > div:first-child .el-button {
  width: 60px;
  height: 30px;
  color: #000;
}
.section-wrap .section-right > div > div:last-child {
  width: 400px;
  float: right;
}
.section-wrap .section-right .section-right-one div h3 {
  font-size: 30px;
  color: #ffd900;
  font-weight: bold;
}
.section-wrap .section-right .section-right-one div p {
  font-size: 20px;
  color: #fff;
  font-weight: bold;
}
.section-wrap .section-right .section-right-two div:last-child span,
.section-wrap .section-right .section-right-three div:last-child span {
  font-size: 8px;
  padding: 7px 20px;
  border: 1px solid #fff;
  border-radius: 15px;
  color: #fff;
}
.section-wrap .section-right .section-right-three div:last-child {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.section-wrap .section-right .section-right-three div:last-child span {
  width: 45px;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 5px;
}
.section-wrap .section-right .section-right-four .shuliang {
  width: 300px;
  display: flex;
  justify-content: space-between;
  float: left;
  margin-left: 10px;
}
.section-right-four .shuliang span {
  font-size: 8px;
  padding: 10px 25px;
  border: 1px solid #fff;
  border-radius: 15px;
  color: #fff;
}
.section-wrap .section-right .section-right-four .shuliang p {
  display: block;
  width: 20px;
  color: #fff;
  line-height: 30px;
}
.section-wrap .section-right .section-right-five p {
  font-size: 14px;
  color: #fff;
}
.section-wrap .section-right .section-right-five p span {
  color: #ffd900;
}
.section-wrap .section-bottom a {
  width: 95%;
  margin: 0 auto;
  display: block;
  border: 2px solid #ffd900;
  text-align: center;
  font-size: 20px;
  color: #ffd900;
  line-height: 60px;
  border-radius: 10px;
  margin-bottom: 20px;
}
.section-wrap .section-bottom img {
  display: block;
}
</style>
