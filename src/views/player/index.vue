<template>
  <div class="players-container">
    <div
      class="item"
      v-for="item in players"
      :key="item.id"
      @click="gotoPlayerDetail(item.id)"
    >
      <img class="img" :src="item.head_img | addUrl" />
      <div class="content">
        <div class="head">
          <span class="title">{{ item.name }}</span>
          <span>{{ item.position }}/</span>
        </div>
        <div class="num">
          <div class="title">号码：</div>
          <span>{{ item.jersey }}</span>
        </div>
        <div class="good">
          <div class="title">擅长：</div>
          <div class="goods-list">
            <span v-for="itemChild in item.specialty_list" :key="itemChild">{{
              itemChild
            }}</span>
          </div>
        </div>
        <div class="slogan" v-if="item.intro">{{ item.intro }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { players } from "../../api/players";
export default {
  name: "index",
  data() {
    return {
      players: []
    };
  },
  mounted() {
    this.getPlayers();
  },
  methods: {
    async getPlayers() {
      let res = await players();
      if (res && res.code == 200) {
        this.players = res.data;
      }
    },
    gotoPlayerDetail(value) {
      this.$router.push({
        name: "PlayerDetail",
        query: { playerId: value }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.players-container {
  padding: 20px;
  color: #333;
  line-height: 24px;
  .item {
    display: flex;
    justify-content: flex-start;
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.08);
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
    .img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 15px;
    }
    .content {
      font-size: 14px;
      .head {
        height: 30px;
        line-height: 30px;
        .title {
          font-size: 18px;
          color: #333;
          line-height: 1;
          font-weight: bold;
          margin-right: 15px;
        }
        span {
          padding: 0px 2px;
        }
      }
      .num {
        display: flex;
        justify-content: flex-start;
        height: 30px;
        line-height: 30px;
        .title {
          width: 50px;
        }
      }
      .good {
        display: flex;
        justify-content: flex-start;
        height: 30px;
        line-height: 30px;
        .title {
          width: 50px;
        }
        .goods-list {
          height: 30px;
          line-height: 30px;
          overflow-x: auto;
          overflow-y: hidden;
          span {
            color: #f89163;
            font-size: 12px;
            padding: 2px 5px;
            border-radius: 5px;
            border: 1px solid #f89163;
            margin-right: 15px;
          }
        }
      }
      .slogan {
        height: 28px;
        line-height: 28px;
        margin-top: 5px;
      }
    }
  }
}
</style>
