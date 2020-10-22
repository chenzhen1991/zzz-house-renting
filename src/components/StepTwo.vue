<template>
  <div class="step-two">
    <StepHead title="你想在哪里<br />寻找?" />
    <div class="content">
      <div class="item" v-for="item in locationArr" :key="item.id">
        <img :src="item.img" alt="" class="img">
        <div class="city">{{ item.city}}</div>
        <div class="country">{{ item.country }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import StepHead from "./StepHead";
export default {
  name: "StepTwo",
  components: {
    StepHead
  },
  data() {
    return {
      locationArr: [
        {
          id:1,
          img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603361855914&di=b7adc340ea5694d6ee8c0dc035b46a0d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa3be931a79f573a2072a3001c41957a53114b76fa01ff-bASPJE_fw658',
          country:"英国",
          city:'伦敦'
        },
        {
          id:2,
          img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603361855914&di=b7adc340ea5694d6ee8c0dc035b46a0d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa3be931a79f573a2072a3001c41957a53114b76fa01ff-bASPJE_fw658',
          country:"巴黎",
          city:'法国'
        },
        {
          id:3,
          img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603361855914&di=b7adc340ea5694d6ee8c0dc035b46a0d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa3be931a79f573a2072a3001c41957a53114b76fa01ff-bASPJE_fw658',
          country:"纽约",
          city:'美国'
        },
        {
          id:4,
          img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603361855914&di=b7adc340ea5694d6ee8c0dc035b46a0d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa3be931a79f573a2072a3001c41957a53114b76fa01ff-bASPJE_fw658',
          country:"波斯顿",
          city:'美国'
        }
      ]
    }
  },
};
</script>

<style scoped lang="scss">
.step-two {
  .content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0px 15px;
    box-sizing: border-box;
    .item {
      width: 50%;
      box-sizing: border-box;
      padding: 15px;
      .img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
      .city{
        text-align: left;
        font-size: 16px;
        line-height: 30px;
        color: $color;
      }
      .country{
        text-align: left;
        font-size: 12px;
        color: #666;
      }
    }
  }
}
</style>
