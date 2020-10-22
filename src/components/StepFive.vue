<template>
  <div class="step-five">
    <StepHead title="验证码" />
    <p class="code-explain">我们给您发了一个接入码<br />请在下面填入</p>
    <van-cell-group class="code">
      <van-field v-model="value1" />
      <van-field v-model="value2" />
      <van-field v-model="value3" />
      <van-field v-model="value4" />
      <van-field v-model="value5" />
      <van-field v-model="value6" />
    </van-cell-group>
    <p>这有助于我们对每个用于进行身份验证</p>
    <div class="resend">没接收到验证码?<span>重新发送</span></div>
    <div class="btn">
      <van-button type="default" class="common-btn"
      >完成</van-button
      >
    </div>
  </div>
</template>

<script>
import StepHead from "./StepHead";
export default {
  name: "StepFive",
  components: {
    StepHead
  },
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: ""
    };
  }
};
</script>

<style scoped lang="scss">
.step-five{
  p{
    color: $color;
  }
  .code-explain{
    text-align: left;
    padding-left: 30px;
    span{

    }
  }
  .code{
    padding: 0px 30px;
    display: flex;
    .van-cell{
      margin: 3px;
    }
  }
  .resend{
    span{
      color: #1989fa;
    }
  }
  .btn{
    padding: 0px 30px;
  }
}
</style>
