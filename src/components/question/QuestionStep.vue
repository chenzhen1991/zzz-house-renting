<template>
  <div class="question">
    <EndPage :data="radioData.endData">
      <div class="info">{{ radioData.title }}</div>
      <van-radio-group v-model="radioData.radio" class="time-group">
        <van-radio v-for="item in radioData.arr" :name="item.id" :key="item.id" @click="selectRadio(item.id, currentIndex)">
          {{ item.name }}</van-radio
        >
      </van-radio-group>
    </EndPage>
  </div>
</template>

<script>
import EndPage from "components/EndPage";
export default {
  name: "QuestionOne",
  props: {
    radioData: {
      type: Object
    },
    currentIndex:{
      type: String,
    },

  },
  components: {
    EndPage
  },
  methods: {
    selectRadio(v,index) {
      this.$emit("selectAnswer", v, index)
    }
  },
};
</script>

<style scoped lang="scss">
.question {
  .info {
    font-size: 20px;
    line-height: 60px;
  }
  .time-group {
    padding: 0px 40px;
    .van-radio {
      background-color: white;
      padding: 10px;
      margin-bottom: 15px;
      border-radius: 5px;
    }
  }
}
</style>
