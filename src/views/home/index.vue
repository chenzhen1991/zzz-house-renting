<template>
  <div class="year-container">
    <img
      src="http://tp5.luluct.cn/static/basketball/images/lanqiu_match.jpg"
      alt="早起，啪啪啪"
    />
    <div class="year-item" v-for="item in games" :key="item.id">
      <div class="title">
        <van-icon name="plus" color="red" class="plus" />{{ item.title }}
      </div>
      <ul>
        <li
          v-for="itemChild in item.children"
          :key="itemChild.title"
          @click="goToDetail(itemChild.id)"
        >
          <div class="title">{{ itemChild.title }}</div>
          <div class="list start-time">
            开始时间：<span>{{ itemChild.startTime }}</span>
          </div>
          <div class="list start-time">
            开始时间：<span>{{ itemChild.endTime }}</span>
          </div>
          <div class="list project" v-if="itemChild.projects">
            {{ itemChild.projects }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { games } from "../../api/games";
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
      this.games = res;
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
