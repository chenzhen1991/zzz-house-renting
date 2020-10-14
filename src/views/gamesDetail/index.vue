<template>
  <div class="detail">
    <div class="title item">
      <div class="battle-name">湖人 VS 掘金</div>
      <div class="battle-games">
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
    <div class="data item">
      <h4>数据</h4>
      <div class="sub-title">近期交手</div>
      <div class="battle">
        <div>
          <img
            src="http://tp5.luluct.cn/static/basketball/images/default_img.jpg"
            alt=""
          />
          <span>队伍一</span>
        </div>
        <div>
          <div class="slider-title">4胜</div>
          <div class="slider"></div>
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
        <div class="sub-title">近期战绩</div>
        <div class="battle">
          <div class="left">
            <span class="tags">胜</span>
            <span class="tags">胜</span>
            <span class="tags">胜</span>
            <span class="tags">胜</span>
            <span class="tags">胜</span>
          </div>
          <div class="right">
            <span class="tags fail">负</span>
            <span class="tags fail">负</span>
            <span class="tags">胜</span>
            <span class="tags">胜</span>
            <span class="tags">胜</span>
          </div>
        </div>
      </div>
    </div>
    <div class="future-games item">
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

<style scoped lang="scss">
.detail {
  background-color: #ebedf0;
  padding-bottom: 100px;
  h4 {
    font-size: 20px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    margin: 0px;
    font-weight: normal;
    padding-left: 20px;
  }
  .item {
    margin-bottom: 12px;
    background-color: white;
    padding: 15px 0px;
    .battle-name {
      font-size: 20px;
      line-height: 50px;
      color: #333;
      text-align: center;
    }
    .battle-games {
      display: flex;
      justify-content: space-between;
      padding: 0px 20px;
      img {
        width: 50px;
        height: 50px;
        display: block;
        border-radius: 25px;
        margin-bottom: 10px;
      }
      div {
        font-size: 18px;
        color: #333;
        text-align: center;
        line-height: 30px;
      }
      .title {
        font-size: 14px;
      }
    }
    .sub-title {
      font-size: 18px;
      color: #666;
      line-height: 70px;
      padding-left: 20px;
    }
    .battle {
      display: flex;
      justify-content: space-between;
      padding: 0px 20px;
      .slider-title{
        font-size: 18px;
        padding-bottom: 5px;
      }
      .slider{
        height: 2px;
        width: 180px;
        background-color: darkblue;
        border-radius: 5px;
      }
      img {
        width: 30px;
        height: 30px;
        display: block;
        border-radius: 15px;
        margin-bottom: 10px;
        margin: 10px auto;
      }
      span{
        font-size: 18px;
        color: #333;
        text-align: center;
        line-height: 30px;
      }
      .tags {
        padding: 5px;
        text-align: center;
        background-color: darkblue;
        margin: 2px;
        color: white;
        border-radius: 5px;
        font-size: 12px;
      }
      .fail {
        background-color: darkred;
      }
    }
    li {
      display: flex;
      justify-content: space-between;
      padding: 15px 30px;
      font-size: 15px;
      line-height: 50px;
      img {
        width: 50px;
        height: 50px;
        display: block;
        border-radius: 25px;
        margin: 0px 4px 10px 4px;
      }
    }
  }
}
</style>
