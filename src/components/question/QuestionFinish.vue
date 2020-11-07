<template>
  <EndPage :data="radioData.endData" class="que-finish">
    <div class="info">{{ radioData.title }}</div>
    <p>我们已根据你的反馈信息，给你推荐了适合的用户给你，请返回首页查看。</p>
    <div class="btn">
      <van-button type="default" class="common-btn ques-finish-btn"
      >好的，马上去看看</van-button
      >
    </div>
  </EndPage>
</template>

<script>
import EndPage from "components/EndPage";
export default {
name: "QuestionFinish",
  components:{
    EndPage
  },
  props: {
    radioData: {
      type: Object,
    },
    currentIndex:{
      type: String,
    },
  },
}
</script>

<style scoped lang="scss">
.que-finish{
  p{
    color: white;
    padding: 0px 20px;
    line-height: 26px;
  }
  .btn{
    padding: 0px 60px;
    .ques-finish-btn{
      background: white !important;
      color: $color;
    }
  }
}
</style>