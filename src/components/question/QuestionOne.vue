<template>
  <div>
    <EndPage :data="endData">
      <van-radio-group v-model="radio">
        <van-radio name="1">单选框 1</van-radio>
        <van-radio name="2">单选框 2</van-radio>
      </van-radio-group>
    </EndPage>
  </div>
</template>

<script>
import EndPage from "components/EndPage";
export default {
  name: "QuestionOne",
  components:{
    EndPage
  },
  data() {
    return {
      radio: "1",
      endData: {
        icon: "certificate"
      },
    };
  }
};
</script>

<style scoped></style>
