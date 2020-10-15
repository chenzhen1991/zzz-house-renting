<template>
  <div class="year-container">
    <img
      src="http://tp5.luluct.cn/static/basketball/images/lanqiu_match.jpg"
      alt="早起，啪啪啪"
    />
    <div class="year-item" v-for="item in games" :key="item.id">
      <div class="title">
        <van-icon name="plus" color="red" class="plus" />{{ item.year }}
      </div>
      <ul>
        <li
          v-for="itemChild in item.children"
          :key="itemChild.title"
          @click="goToDetail(itemChild.id)"
        >
          <div class="title">{{ itemChild.title }}</div>
          <div class="list start-time">
            开始时间：<span>{{ itemChild.date_start }}</span>
          </div>
          <div class="list start-time">
            开始时间：<span>{{ itemChild.date_end }}</span>
          </div>
          <div class="list project" v-if="itemChild.intro">
            {{ itemChild.intro }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { games } from "../../api/games";
import axios from "axios";
export default {
  name: "index",
  data() {
    return {
      games: []
    };
  },
  mounted() {
    this.getYearGames();
  },
  methods: {
    async getYearGames() {
      const res = await games();
      if (res && res.code == 200) {
        this.games = [];
        for (let item in res.data) {
          this.games.push({
            year: item.substring(1, item.length),
            children: res.data[item]
          });
        }
      }
      // axios
      //   .get("http://tp5.luluct.cn/basketball/wab/matchListApi")
      //   .then(res => {
      //     console.log(res);
      //   });
    },
    goToDetail(id) {
      this.$router.push({ name: "GamesDetail", query: { gamesId: id } });
    }
  }
};
</script>

<style scoped lang="scss">
.year-container {
  width: 100%;
  padding-bottom: 100px;
  img {
    width: 100%;
  }
  .year-item {
    padding: 20px;
    .title {
      font-size: 20px;
      color: #333;
      font-weight: bold;
      line-height: 40px;
      .plus {
        font-weight: bolder;
        font-size: 16px;
        padding-right: 5px;
      }
    }
    ul {
      li {
        box-shadow: 0 5px 12px rgba(0, 0, 0, 0.08);
        padding: 15px;
        border-radius: 10px;
        margin-bottom: 20px;
        .title {
          font-size: 16px;
          color: #333;
          height: 30px;
          line-height: 30px;
        }
        .list {
          font-size: 12px;
          color: #999;
          line-height: 26px;
        }
        .project {
          color: #333;
        }
      }
    }
  }
}
</style>
