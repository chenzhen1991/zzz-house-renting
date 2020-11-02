<template>
  <div class="tabs">
    <div :style="{width: (1+currentIndex) * 20 + 'vw' }" style="height: 10px;background-color:red;"></div>
    <div v-show="currentIndex === 0">
      0
    </div>
    <div v-show="currentIndex === 1">
      1
    </div>
    <div v-show="currentIndex === 2">
      2
    </div>
    <div v-show="currentIndex === 3">
      3
    </div>
    <div v-show="currentIndex === 4">
      4
    </div>
    <van-button @click="()=>currentIndex--">上eeee步</van-button>
    <van-button @click="()=>currentIndex++">下一33333333步</van-button>
  </div>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {
      currentIndex: 0
    }
  },
};
</script>

<style scoped lang="scss">
.tabs{
  .head{
    display: flex;
    justify-content: space-between;
    >div{
      width: 20%;
    }
    .selected{
      border-bottom: 1px solid red;
    }
  }
  .content{
    >div{
      display: none;
    }
    .active{
      display: block;
    }
  }
}
</style>
