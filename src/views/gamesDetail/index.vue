<template>
  <div>
    <div class="title">
      <div class="date">湖人 VS 掘金</div>
      <div class="detail">
        <div class="team team-one">
          <img
            src="http://tp5.luluct.cn/static/basketball/images/default_img.jpg"
            alt=""
          />
          <span>队伍一</span>
        </div>
        <div class="team team-detail">
          <div class="title">视频直播 NBA 季后赛</div>
          <div class="time">9月25日 09:00</div>
        </div>
        <div class="team team-two">
          <img
            src="http://tp5.luluct.cn/static/basketball/images/default_img.jpg"
            alt=""
          />
          <span>队伍二</span>
        </div>
      </div>
    </div>
    <div class="data">
      <h4>数据</h4>
      <div>近期交手</div>
      <div>
        <div>
          <img
            src="http://tp5.luluct.cn/static/basketball/images/default_img.jpg"
            alt=""
          />
          <span>队伍一</span>
        </div>
        <div>
          <van-slider v-model="value" active-color="#ee0a24">
            <template #button>
              <div class="custom-button">{{ value }}</div>
            </template>
          </van-slider>
        </div>
        <div>
          <img
            src="http://tp5.luluct.cn/static/basketball/images/default_img.jpg"
            alt=""
          />
          <span>队伍二</span>
        </div>
      </div>
      <div>
        近期战绩
        <div class="battle">
          <div class="left">
            <span>胜</span>
            <span>胜</span>
            <span>胜</span>
            <span>胜</span>
            <span>胜</span>
          </div>
          <div class="right">
            <span>负</span>
            <span>负</span>
            <span>胜</span>
            <span>胜</span>
            <span>胜</span>
          </div>
        </div>
      </div>
    </div>
    <div class="future-games">
      <h4>未来场次</h4>
      <ul>
        <li>
          <div>湖人</div>
          <img
            src="http://tp5.luluct.cn/static/basketball/images/default_img.jpg"
            alt=""
          />
          <div>9月23日 09:00</div>
          <img
            src="http://tp5.luluct.cn/static/basketball/images/default_img.jpg"
            alt=""
          />
          <div>掘金</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "gamesDetail",
  data() {
    return {
      value: 30
    };
  }
};
</script>

<style scoped></style>
