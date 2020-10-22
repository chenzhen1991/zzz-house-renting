<template>
  <div class="step">
    <div class="set">
      <van-progress percentage="40" />
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
      <StepFive />
    </div>
    <EndPage :data="endData"/>
  </div>
</template>

<script>
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import StepFour from "@/components/StepFour";
import StepFive from "@/components/StepFive";
import EndPage from "@/components/EndPage";
export default {
  name: "Step",
  data() {
    return {
      endData: {
        icon: "certificate",
        info: "欢迎使用ZZZ!",
        detail: "现在我们有5个问题可以帮助你与同心室友相匹配",
        btnName: "马上开始"
      }
    }
  },
  components: {
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive,
    EndPage
  }
};
</script>

<style scoped lang="scss">
.step {
}
</style>
