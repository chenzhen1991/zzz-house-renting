<template>
  <div class="step-three">
    <div class="item">
      <StepHead title="你的最高花费<br/>是多少?" />
      <div class="spend"><span>${{ value }}</span>每月</div>
      <van-slider v-model="value" min="0" max="5000" />
      <div class="range">
        <span>$0</span>
        <span>$5000</span>
      </div>
    </div>
    <div class="item">
      <StepHead title="你的入住日期<br/>是什么?" />
      <van-cell title="入住日期" :value="date" @click="show = true" />
      <van-calendar v-model="show" @confirm="onConfirm" />
    </div>
    <van-button type="default" class="common-btn" @click="selectTarget(3)">下一步</van-button>
  </div>
</template>

<script>
import StepHead from "./StepHead";
export default {
  name: "StepThree",
  components: {
    StepHead
  },
  data() {
    return {
      date: "",
      show: false,
      value: 2500
    };
  },
  methods: {
    onChange(value) {
      this.value = value;
    },
    formatDate(date) {
      return `${date.getMonth() + 1}月${date.getDate()}日,${date.getFullYear()}年`;
    },
    onConfirm(date) {
      this.show = false;
      console.log(date)
      this.date = this.formatDate(date)
    },
    selectTarget(v) {
      this.$emit('changeIndex', v)
    }
  }
};
</script>

<style scoped lang="scss">
.step-three {
  padding: 0px 30px;
  h3{
    padding-left: 0px;
  }
  .spend{
    text-align: left;
    font-size: 14px;
    line-height: 50px;
    span{
      font-size: 26px;
      color: #1989fa;
    }
  }
  .range{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .van-cell{
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 28px;
    .van-cell__title{
      text-align: left;
    }
  }
}
</style>
