<template>
  <div class="login">
    <h3>你好<br />欢迎回来!</h3>
    <van-cell-group>
      <van-field v-model="name" placeholder="用户名" />
      <div class="pwd-field">
        <van-field v-model="pwd" placeholder="密码" type="password" />
        <span>忘记密码?</span>
      </div>
      <van-button type="default" @click="addAttr" class="login-btn common-btn"
        >登陆</van-button
      >
    </van-cell-group>
    <p>还没有账号?<span>马上注册</span></p>
  </div>
</template>

<script>
import hi from "../mixin/test";
export default {
  name: "Login",
  data() {
    return {
      pwd: "",
      obj: {
        a: "111"
      },
      name: ""
    };
  },
  methods: {
    addAttr() {
      // this.obj.b = '新增加的'
      // console.log(this.obj)
      // this.$set(this.obj, 'b','新增加的')
      // this.$set(this.data, 'b','新增加的')
      // console.log(this.obj)
      console.log('组件里面的方法')
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
  padding: 20px;
  position: relative;
  .van-cell {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .pwd-field {
    position: relative;
    margin-bottom: 40px;
    span {
      position: absolute;
      right: 1px;
      bottom: -25px;
      color: #404b69;
    }
  }
  .login-btn{
    width: 100%;
  }
  p{
    position: fixed;
    bottom: 50px;
    font-size: 16px;
    color: #020433;
    left:50%;
    transform: translateX(-50%);
    span{
      color: #0f73ee;
    }
  }
}
</style>
