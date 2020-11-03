<template>
  <div class="step-five">
    <StepHead title="验证码" />
    <p class="code-explain">我们给您发了一个接入码<br />请在下面填入</p>
    <CheckCode />
    <p>这有助于我们对每个用于进行身份验证</p>
    <div class="resend">没接收到验证码?<span>重新发送</span></div>
    <div class="btn">
      <van-button type="default" class="common-btn" @click="selectTarget(5)"
      >完成</van-button
      >
    </div>
  </div>
</template>

<script>
import StepHead from "./StepHead";
import CheckCode from "components/CheckCode";
export default {
  name: "StepFive",
  components: {
    StepHead,
    CheckCode
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
  },
  methods: {
    selectTarget(v) {
      this.$emit('changeIndex', v)
    }
  },
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
  }
  .resend{
    span{
      color: #1989fa;
    }
  }
  .btn{
    padding: 0px 30px;
    margin-top: 30px;
  }
}
</style>
