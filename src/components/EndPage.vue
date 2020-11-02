<template>
  <div class="sus-info">
    <div class="first">
      <div class="second">
        <div class="third">
          <van-icon :name="data.icon" class="icon" />
        </div>
      </div>
    </div>
    <div class="info">{{ data.info }}</div>
    <div class="detail">{{ data.detail }}</div>
    <van-button type="default" class="go-login">{{ data.btnName }}</van-button>
  </div>
</template>

<script>
export default {
  name: "EndPage",
  props: {
    data: {
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
.sus-info {
  background: linear-gradient(135deg, #0f73ee, #c644fc);
  text-align: center;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  box-sizing: border-box;
  .first {
    width: 300px;
    height: 300px;
    background-color: rgba(2, 29, 73, 0.5);
    border-radius: 50%;
    margin: 0 auto;
    display: flex;
    .second {
      width: 200px;
      height: 200px;
      background-color: rgba(2, 44, 73, 0.5);
      border-radius: 50%;
      margin: 0px auto;
      display: flex;
      align-self: center;
      .third {
        width: 150px;
        height: 150px;
        background-color: rgba(2, 44, 66, 0.5);
        border-radius: 50%;
        margin: 0px auto;
        align-self: center;
        .icon {
          font-size: 120px;
          color: white;
          line-height: 150px;
        }
      }
    }
  }
  .info {
    font-size: 32px;
    line-height: 70px;
    color: white;
  }
  .detail {
    font-size: 16px;
    line-height: 40px;
    color: white;
    margin-bottom: 40px;
  }
  .go-login {
    width: 60%;
    background-color: white;
    color: #020433;
    border-radius: 5px;
  }
}
</style>
