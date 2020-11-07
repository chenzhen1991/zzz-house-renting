<template>
  <EndPage :data="radioData.endData" class="que-five">
    <div class="info">{{ radioData.title }}</div>
    <div class="tags">
      <span
        v-for="item in radioData.arr"
        :key="item.id"
        @click="selectTags(item.id)"
        >{{ item.name }}</span
      >
    </div>
    <div class="btn">
      <van-button
        type="default"
        class="common-btn ques-finish-btn"
        @click="selectRadio(itemArr, currentIndex)"
        >完成</van-button
      >
    </div>
  </EndPage>
</template>

<script>
import EndPage from "components/EndPage";
import { Toast } from "vant";
export default {
  name: "QuestionFive",
  components: {
    EndPage
  },
  props: {
    radioData: {
      type: Object
    },
    currentIndex: {
      type: String
    }
  },
  data() {
    return {
      itemArr: [1, 2]
    };
  },
  methods: {
    selectRadio(v, index) {
      if (v && v.length > 0) {
        this.$emit("selectAnswer", v, index);
      } else {
        Toast.loading({ message: "请先选择标签" });
      }
    },
    selectTags(v) {
      this.itemArr.push(v);
    }
  }
};
</script>

<style scoped lang="scss">
.que-five {
  .info {
    font-size: 20px;
    line-height: 60px;
  }
  .tags {
    padding: 0px 40px;
    span {
      display: inline-block;
      padding: 10px;
      border-radius: 5px;
      color: white;
      margin-right: 15px;
      margin-bottom: 15px;
      border: 1px solid white;
      cursor: pointer;
    }
    span.active {
      background-color: white;
      color: $color;
    }
  }
  .btn {
    padding: 0px 20px;
    .ques-finish-btn {
      background: white !important;
      color: $color;
    }
  }
}
</style>
