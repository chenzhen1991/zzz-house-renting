<template>
  <div class="tabs">
    <div :style="{width: (1+currentIndex) * 20 + 'vw' }" style="height: 6px;background:linear-gradient(135deg, #0f73ee, #c644fc);;"></div>
    <div v-for="(item, index) in slotArr" v-show="currentIndex === index" :key="item">
      <slot :name="item"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    slotArr: {
      type: Array,
    },
    currentIndex:{
      type:Number,
      default:0
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
