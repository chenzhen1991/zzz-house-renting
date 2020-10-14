<template>
  <div class="tabs">
    <van-tabs>
      <van-tab title="介绍">
        <div class="intro">
          <div class="project">
            四个项目，技巧挑战赛、投篮大赛、三分赛、全明星正赛
          </div>
          <div class="detail">
            <div>赛制：全场 七场四胜</div>
            <div>场地：北京农学院</div>
            <div>时间：星期六 上午</div>
            <div>裁判：石小杰</div>
            <div>每队：14名队员</div>
            <div>比赛：两个半场，四节比赛</div>
            <div>每节：每节15分钟，不停表</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="队伍一">
        <div class="teams">
          <h5>队伍一<span>（队长：郝鑫）</span></h5>
          <div class="table">
            <ul>
              <li class="title">
                <div>球员</div>
                <div>号码</div>
                <div>位置</div>
                <div>身高</div>
              </li>
              <li>
                <div>邹智睿</div>
                <div>24</div>
                <div>后卫</div>
                <div>180</div>
              </li>
              <li>
                <div>凌路</div>
                <div>12</div>
                <div>中锋</div>
                <div>175</div>
              </li>
            </ul>
          </div>
        </div>
      </van-tab>
      <van-tab title="队伍二"
        ><div class="teams">
          <h5>队伍一<span>（队长：郝鑫）</span></h5>
          <div class="table">
            <ul>
              <li class="title">
                <div>球员</div>
                <div>号码</div>
                <div>位置</div>
                <div>身高</div>
              </li>
              <li>
                <div>邹智睿</div>
                <div>24</div>
                <div>后卫</div>
                <div>180</div>
              </li>
              <li>
                <div>凌路</div>
                <div>12</div>
                <div>中锋</div>
                <div>175</div>
              </li>
            </ul>
          </div>
        </div></van-tab
      >
      <van-tab title="赛程">
        <div class="games content">
          <div class="item">
            <div class="date">2020年10月23日</div>
            <div class="detail">
              <div class="team team-one">
                <img
                  src="http://tp5.luluct.cn/static/basketball/images/default_img.jpg"
                  alt=""
                />
                <span>队伍一</span>
              </div>
              <div class="team team-detail">
                <div class="title">NBA 季后赛</div>
                <div class="score">
                  <span class="fail">103</span><span class="line"></span
                  ><span class="win">105</span>
                </div>
                <div class="type">视频直播</div>
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
          <div class="item">
            <div class="date">2020年10月23日</div>
            <div class="detail">
              <div class="team team-one">
                <img
                  src="http://tp5.luluct.cn/static/basketball/images/default_img.jpg"
                  alt=""
                />
                <span>队伍一</span>
              </div>
              <div class="team team-detail">
                <div class="title">NBA 季后赛</div>
                <div class="time">09:00</div>
                <div class="type">视频直播</div>
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
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "DetailTabs",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.tabs {
  background-color: white;
  .intro {
    padding: 20px;
    line-height: 32px;
    font-size: 16px;
    color: #333;
    .project {
      margin-bottom: 15px;
      line-height: 26px;
    }
  }
  .teams {
    padding: 20px;
    h5 {
      font-size: 22px;
      color: #333;
      margin: 0px;
      line-height: 40px;
      span {
        font-size: 16px;
      }
    }
    li {
      display: flex;
      justify-content: space-between;
      height: 32px;
      line-height: 32px;
      color: #333;
      border: 1px solid #ddd;
      font-size: 16px;
      div {
        width: 25%;
        text-align: left;
        border-right: 1px solid #ddd;
        padding-left: 10px;
      }
    }
    li:nth-child(2n) {
      border-bottom: none;
    }
    .title {
      background-color: #f5f8fa;
    }
  }
  .games {
    .date {
      font-size: 16px;
      line-height: 50px;
      text-align: center;
      color: #333;
      background-color: rgba(235, 237, 240, 0.39);
    }
    .detail {
      display: flex;
      justify-content: space-between;
      padding: 15px;
      .team {
        text-align: center;
        img {
          width: 50px;
          height: 50px;
          display: block;
          border-radius: 25px;
          margin-bottom: 10px;
        }
        span {
          font-size: 18px;
          color: #333;
        }
      }
      .team-detail {
        text-align: center;
        line-height: 26px;
        .title,
        .type {
          font-size: 16px;
          color: #666;
        }
        .time {
          font-size: 17px;
          color: #333;
        }
        .score {
          span {
            font-size: 28px;
            line-height: 40px;
            margin: 8px;
          }
          .fail {
            color: #999;
          }
          .win {
            color: #333;
          }
          .line {
            display: inline-block;
            height: 2px;
            width: 15px;
            background-color: #333;
            line-height: 40px;
          }
        }
      }
    }
  }
}
</style>
