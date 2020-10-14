<template>
  <div class="games-detail">
    <h4 class="title">2020全民明星赛</h4>
    <div class="project">
      四个项目：技巧挑战赛、投篮大赛、三分大赛、全明星赛
    </div>
    <div class="my-swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <DetailTabs />
    <DetailGamesCollection />
  </div>
</template>

<script>
import DetailTabs from "@/components/DetailTabs";
import DetailGamesCollection from "@/components/DetailGamesCollection";
export default {
  name: "index",
  data() {
    return {
      images: [
        "http://tp5.luluct.cn/static/basketball/images/lanqiu_match.jpg",
        "http://tp5.luluct.cn/static/basketball/images/lanqiu_match.jpg",
        "http://tp5.luluct.cn/static/basketball/images/lanqiu_match.jpg"
      ]
    };
  },
  components: {
    DetailTabs,
    DetailGamesCollection
  }
};
</script>

<style scoped lang="scss">
.games-detail {
  padding-bottom: 100px;
  background-color: #f5f8fa;
  .title {
    font-size: 32px;
    color: #333;
    font-weight: 700;
    line-height: 60px;
    margin: 0px;
    padding: 0px 20px;
    background-color: white;
  }
  .project {
    font-size: 14px;
    line-height: 26px;
    color: #666;
    padding: 0px 20px;
    background-color: white;
  }
  .my-swipe {
    padding: 0px 20px;
    box-sizing: border-box;
    background-color: white;
    .van-swipe-item {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>
