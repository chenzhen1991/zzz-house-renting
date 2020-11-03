<template>
  <div class="step-one">
    <StepHead title="你的寻找目标<br />是什么?"/>
    <div class="content">
      <div class="item" v-for="item in targetArr" :key="item.id" @click="selectTarget(1)">
        <div class="img">
          <van-icon :name="item.icon" />
          <div>{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StepHead from "./StepHead";
export default {
  name: "StepOne",
  components:{
    StepHead
  },
  data() {
    return {
      targetArr: [
        {
          id: 1,
          bgImg: "red",
          icon: "shop-o",
          text: "一间房间"
        },
        {
          id: 2,
          bgImg: "red",
          icon: "home-o",
          text: "整栋房间"
        },
        {
          id: 3,
          bgImg: "red",
          icon: "friends-o",
          text: "合租室友"
        },
        {
          id: 4,
          bgImg: "red",
          icon: "user-o",
          text: "租房客"
        }
      ]
    };
  },
  methods: {
    selectTarget(v) {
      this.$emit('changeIndex', v)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.step-one {
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
        background-color: red;
        color: white;
        height: 150px;
        i{
          font-size: 60px;
          margin-top: 30px;
        }
        >div{
          font-size: 18px;
          line-height: 40px;
        }
      }
    }
  }
}
</style>
