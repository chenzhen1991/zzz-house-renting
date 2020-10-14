<template>
  <div class="collections">
    <div class="content">
      <h4>比赛集锦</h4>
      <div class="item">
        <div class="text">
          <div class="title">快攻一条龙</div>
          <div class="explain">
            <img
              src="http://tp5.luluct.cn/static/basketball/images/default_img.jpg"
              alt=""
            />
            <span>凌路</span>
            <span>中锋</span>
            <span>2017夏季赛G1</span>
          </div>
        </div>
        <img
          src="http://tp5.luluct.cn/static/basketball/images/default_img.jpg"
          alt=""
          class="img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGamesCollection"
};
</script>

<style scoped lang="scss">
.collections {
  margin-top: 15px;
  .content {
    background-color: white;
    padding: 15px 20px;
    h4 {
      margin: 0px;
      font-size: 18px;
      line-height: 40px;
    }
    .item {
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 16px;
        line-height: 36px;
      }
      .explain {
        line-height: 30px;
        img {
          width: 16px;
          height: 16px;
          border-radius: 10px;
          vertical-align: middle;
        }
        span {
          display: inline-block;
          font-size: 14px;
          color: #666;
          padding: 0px 5px;
        }
      }
      .img {
        width: 120px;
        height: auto;
      }
    }
  }
}
</style>
