<template>
  <div class="step">
    <RentTabs
      :slotArr="slotArr"
      :currentIndex="currentIndex"
      v-if="currentIndex !== 5"
    >
      <StepOne slot="stepOne" @changeIndex="changeIndex" />
      <StepTwo slot="stepTwo" @changeIndex="changeIndex" />
      <StepThree slot="stepThree" @changeIndex="changeIndex" />
      <StepFour slot="stepFour" @changeIndex="changeIndex" />
      <StepFive slot="stepFive" @changeIndex="changeIndex" />
    </RentTabs>
    <EndPage :data="endData" v-if="currentIndex === 5">
      <div class="info">{{ info }}</div>
      <div class="detail">{{ detail }}</div>
      <van-button type="default" class="go-login" @click="goToQuestion">{{
        btnName
      }}</van-button>
    </EndPage>
  </div>
</template>

<script>
import RentTabs from "components/RentTabs";
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
        icon: "certificate"
      },
      info: "欢迎使用ZZZ!",
      detail: "现在我们有5个问题可以帮助你与同心室友相匹配",
      btnName: "马上开始",
      slotArr: ["stepOne", "stepTwo", "stepThree", "stepFour", "stepFive"],
      currentIndex: 0
    };
  },
  components: {
    RentTabs,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive,
    EndPage
  },
  methods: {
    changeIndex(v) {
      this.currentIndex = v;
    },
    goToQuestion() {
      this.$router.push("/question");
    }
  }
};
</script>

<style scoped lang="scss">
.step {
  width: 100vw;
  height: 100vh;
}
</style>
