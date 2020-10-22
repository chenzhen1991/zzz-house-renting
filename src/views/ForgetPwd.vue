<template>
  <div class="account forget-pwd">
    <h3>忘记密码?</h3>
    <div class="explain">请在下面输入您的电子邮件以接收密码重置邮件</div>
    <van-form>
      <van-field v-model="name" placeholder="邮箱地址" />
      <van-button type="default" @click="addAttr" class="login-btn common-btn"
        >发送</van-button
      >
    </van-form>
  </div>
</template>

<script>
import "../assets/css/account.scss";
export default {
  name: "ForgetPwd"
};
</script>

<style scoped></style>
