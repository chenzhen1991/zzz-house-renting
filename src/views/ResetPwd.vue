<template>
  <div class="account reset-pwd">
    <div class="set">
      <h3>重置密码</h3>
      <div class="explain">
        重置代码发送到您的电子邮件。请输入代码并创建新密码。
      </div>
      <van-form>
        <van-field v-model="reset" placeholder="重置代码" />
        <van-field v-model="newPwd" placeholder="新的密码" />
        <van-field v-model="confirmPwd" placeholder="确认密码" />
        <van-button type="default" class="login-btn common-btn"
          >重置密码</van-button
        >
      </van-form>
    </div>
    <EndPage :data="endData" />
  </div>
</template>

<script>
import "../assets/css/account.scss";
import EndPage from "@/components/EndPage";
export default {
  name: "ResetPwd",
  data() {
    return {
      reset: "",
      newPwd: "",
      confirmPwd: "",
      endData: {
        icon: "passed",
        info: "成功!",
        detail: "您已成功更改密码。登录时请使用新密码。",
        btnName: "马上登陆"
      }
    };
  },
  components: {
    EndPage
  }
};
</script>

<style scoped lang="scss">
.reset-pwd {
  padding: 0px;
  width: 100%;
  height: 100%;
  .set {
    padding: 20px;
  }
}
</style>
