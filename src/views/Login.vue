<template>
  <div class="account login">
    <h3>你好<br />欢迎回来!</h3>
    <van-form>
      <van-field v-model="userName" placeholder="用户名" />
      <div class="pwd-field">
        <van-field v-model="password" placeholder="密码" type="password" />
        <span @click="resetPwd">忘记密码?</span>
      </div>
      <van-button type="default" @click="login" class="login-btn common-btn"
        >登陆</van-button
      >
    </van-form>
    <p>还没有账号?<span @click="register">马上注册</span></p>
  </div>
</template>

<script>
import hi from "../mixin/test";
import "../assets/css/account.scss";
import { login} from "../api/login";
export default {
  name: "Login",
  data() {
    return {
      password: "",
      obj: {
        a: "111"
      },
      userName: ""
    };
  },
  methods: {
    async login() {
      // this.obj.b = '新增加的'
      // console.log(this.obj)
      // this.$set(this.obj, 'b','新增加的')
      // this.$set(this.data, 'b','新增加的')
      // console.log(this.obj)
      // console.log(this.userName, this.password);
      let res = await login({
        userName: this.userName,
        password: this.password
      });
      if (res && res.code == 200) {
        this.$router.push("/step");
      }
    },
    register() {
      this.$router.push("/register");
    },
    resetPwd() {
      this.$router.push("/forgetPwd");
    }
  },
  mounted() {
    console.log("组件里面");
  },
  mixins: [hi]
};
</script>

<style scoped lang="scss">
.login {
  .pwd-field {
    position: relative;
    margin-bottom: 40px;
    span {
      position: absolute;
      right: 1px;
      bottom: -25px;
      color: $color;
    }
  }
  p {
    position: fixed;
    bottom: 50px;
    font-size: 16px;
    color: #020433;
    left: 50%;
    transform: translateX(-50%);
    span {
      color: #0f73ee;
    }
  }
}
</style>
