<template>
  <div class="player-detail">
    <div class="my-swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item
          v-for="(image, index) in detailsData.img_list"
          :key="index"
        >
          <img :src="image | headerImg" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <h5>{{ detailsData.name }}</h5>
    <div>
      球衣：<span>{{ detailsData.jersey }}</span>
    </div>
    <div>
      位置：<span>{{ detailsData.position }}</span>
    </div>
    <div>
      身高：<span>{{ detailsData.height }}</span>
    </div>
    <div>
      体重：<span>{{ detailsData.weight }}</span>
    </div>
    <div>
      臂展：<span>{{ detailsData.reach }}</span>
    </div>
    <div class="goods">
      <span v-for="(item, index) in detailsData.specialty_list" :key="index" class="tags">{{item}}</span>
    </div>
  </div>
</template>

<script>
import { ImageUrl } from "@/config";
import { playerDetail } from "../../api/players";
export default {
  name: "index",
  filters: {
    headerImg: val => {
      return ImageUrl + val;
    }
  },
  data() {
    return {
      detailsData: ""
    };
  },
  mounted() {
    this.getPlayerDetail();
  },
  methods: {
    async getPlayerDetail() {
      const playerId = this.$route.query.playerId;
      let res = await playerDetail(playerId);
      if (res && res.code == 200) {
        this.detailsData = res.data;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.player-detail {
  padding: 20px;
  .my-swipe {
    img {
      width: 100%;
      border-radius: 15px;
    }
  }
  h5 {
    font-size: 26px;
    color: #333;
    line-height: 50px;
    margin: 0px;
  }
  div {
    color: #666;
    font-size: 16px;
    line-height: 30px;
    .tags{
      background-color: #f5f8fa;
      font-size: 14px;
      color: #333;
      padding: 5px 8px;
      border-radius: 10px;
      margin-right: 5px;
    }
  }
}
</style>
