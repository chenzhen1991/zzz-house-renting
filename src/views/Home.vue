<template>
  <div class="home">
    <!--    <CheckboxList-->
    <!--      :items="items"-->
    <!--      :checkArr="checkArr"-->
    <!--      @func="onChangeCheck"-->
    <!--    />-->
    <!--    v-model == value onchange-->
    <!--    <CheckboxList-->
    <!--        :items="items"-->
    <!--        v-model="checkArr"-->
    <!--    />-->
    <!--    方法三-->
    <!--        <CheckboxList-->
    <!--          :items="items"-->
    <!--          :checkArr.sync="checkArr"-->
    <!--        />-->
    <!--租房的首页-->
    <div class="item">
      <div class="basic-message">
        <div class="container">
          <div class="img">
            <img src="../assets/header.jpg" alt="" />
          </div>
          <div class="content">
            <div>
              <span class="name">SuSen Song</span
              ><van-icon name="diamond" class="icon" />
            </div>
            <div>
              <van-icon class="icon-gender" name="contact" /><span class="age"
                >29</span
              ><span class="dot">~</span><span class="identity">租客</span>
            </div>
          </div>
        </div>
        <div class="detail">
          <van-icon name="ellipsis" />
        </div>
      </div>
      <van-swipe :autoplay="3000" class="house-swiper">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
          <van-icon name="like-o" class="icon-like"/>
        </van-swipe-item>
      </van-swipe>
      <div class="bottom-content">
        <div class="identify"><van-icon name="diamond" class="icon" /><span>已实名认证</span><span>两房</span></div>
        <div class="explain">
          非常漂亮的两房户型，独立卫生间，1房间闲置求合租。
        </div>
        <div class="time">$650 每月</div>
        <div class="long">目前有效 6个月租期</div>
      </div>
    </div>
    <div class="item">
      <div class="basic-message">
        <div class="container">
          <div class="img">
            <img src="../assets/header.jpg" alt="" />
          </div>
          <div class="content">
            <div>
              <span class="name">SuSen Song</span
              ><van-icon name="diamond" class="icon" />
            </div>
            <div>
              <van-icon class="icon-gender" name="contact" /><span class="age"
            >29</span
            ><span class="dot">~</span><span class="identity">租客</span>
            </div>
          </div>
        </div>
        <div class="detail">
          <van-icon name="ellipsis" />
        </div>
      </div>
      <van-swipe :autoplay="3000" class="house-swiper">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
          <van-icon name="like-o" class="icon-like"/>
        </van-swipe-item>
      </van-swipe>
      <div class="bottom-content">
        <div class="identify"><van-icon name="diamond" class="icon" /><span>已实名认证</span><span>两房</span></div>
        <div class="explain">
          非常漂亮的两房户型，独立卫生间，1房间闲置求合租。
        </div>
        <div class="time">$650 每月</div>
        <div class="long">目前有效 6个月租期</div>
      </div>
    </div>
    <HomeLayer />
  </div>
</template>

<script>
// import CheckboxList from "@/components/CheckboxList";
import HomeLayer from "components/HomeLayer";
export default {
  name: "Home",
  data() {
    return {
      // items: [
      //   {
      //     label: "苹果",
      //     id: "1"
      //   },
      //   {
      //     label: "栗子",
      //     id: "2"
      //   },
      //   {
      //     label: "梨子",
      //     id: "3"
      //   }
      // ],
      // checkArr: ['1','2']
      images: [
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604761314659&di=96ecb95fb9cf21ef9801f61e7e98e0de&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201404%2F15%2F20140415005019_KZTsN.thumb.700_0.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604761224287&di=0392e237f465acbfb1d28363881b357b&imgtype=0&src=http%3A%2F%2Fwatermark.lovepik.com%2Fphoto%2F50104%2F2139.jpg_wh1200.jpg"
      ]
    };
  },
  components: {
    // CheckboxList
    HomeLayer
  },
  methods: {
    // onChangeCheck(v) {
    //   console.log(v);
    //   this.checkArr = v
    // }
  }
};
</script>
<style scoped lang="scss">
.home {
  position: relative;
  background-color: aliceblue;
  .item {
    background-color: white;
    margin-bottom: 15px;
    .basic-message {
      display: flex;
      justify-content: space-between;
      padding: 8px 25px;
      .container {
        display: flex;
        justify-content: flex-start;
        .img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 15px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .content {
          text-align: left;
          div {
            span {
              height: 30px;
              line-height: 30px;
              display: inline-block;
            }
            .name {
              color: #333;
              font-size: 18px;
              padding-right: 15px;
            }
            .icon {
              color: #42b983;
              font-size: 20px;
            }
            .icon-gender {
              font-weight: bold;
              font-size: 16px;
              padding-right: 10px;
            }
            .age {
              font-size: 14px;
            }
            .dot {
              padding: 0px 15px;
              font-size: 16px;
            }
            .identity {
              font-size: 14px;
            }
          }
        }
      }
      .detail {
        height: 60px;
        line-height: 60px;
        font-size: 20px;
      }
    }
    .house-swiper .van-swipe-item {
      height: 200px;
      position: relative;
      img {
        height: 200px;
        width: 100vw;
      }
      .icon-like{
        position: absolute;
        top:20px;
        right:20px;
        font-size: 24px;
        color: white;
      }
    }
    .bottom-content {
      padding: 6px 15px 15px 15px;
      text-align: left;
      font-size: 14px;
      div{
        line-height: 22px;
      }
      .identify{
        color: #42b983;
        line-height: 30px;
        span{
          padding: 0px 10px;
        }
      }
      .explain{
        font-size: 20px;
        font-weight: 540;
        line-height: 26px;
      }
    }
  }
}
</style>
