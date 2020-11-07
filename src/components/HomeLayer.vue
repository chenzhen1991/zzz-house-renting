<template>
  <div class="layer">
    <span>地图</span><van-icon name="location-o" class="icon" />
    <span>|</span>
    <span>筛选</span><van-icon name="search" class="icon" />
  </div>
</template>

<script>
export default {
  name: "HomeLayer"
};
</script>

<style scoped lang="scss">
.layer{
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 60vw;
  height: 40px;
  line-height: 40px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #E6E8ED;
  @extend .flexCenter;
  //@include flexBox($jc: flex-end);
  span{
    padding: 0px 10px;
    font-size: 14px;
  }
  .icon{
    font-size: 20px;
  }
}
</style>
