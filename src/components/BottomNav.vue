<template>
  <div>
    <van-tabbar>
      <van-tabbar-item v-for= "(item, index) in data" :icon="item.icon" :key="index" :to="item.to">{{item.title}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "BottomNav",
  props:{
    data:{
      type: Array,
      default:()=>{
        return []
      }
    }
  }
};
</script>
