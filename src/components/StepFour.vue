<template>
  <div class="step-four">
    <StepHead title="创建你的个人<br />账号" />
    <van-form>
      <van-field
        v-model="fullname"
        label="全名"
        name="全名"
        placeholder="全名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field name="gender" label="性别">
        <template #input>
          <van-radio-group v-model="gender" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
            <van-radio name="3">保密</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        label="出生日期"
        v-model="birthday"
        name="出生日期"
        placeholder="出生日期"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        label="联系电话"
        v-model="phone"
        name="联系电话"
        placeholder="联系电话"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        label="邮箱地址"
        v-model="address"
        name="邮箱地址"
        placeholder="邮箱地址"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        label="密码"
        v-model="pwd"
        name="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        label="确认密码"
        v-model="comfirmPwd"
        name="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        label="你的职业是什么?"
        v-model="job"
        name="你的职业是什么"
        placeholder="你的职业是什么"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        label="工作地点"
        v-model="location"
        name="工作地点"
        placeholder="工作地点"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field name="uploader" label="个人照片(最大数量5)">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>
      <van-button type="default" class="login-btn common-btn"
        >下一步</van-button
      >
    </van-form>
  </div>
</template>

<script>
import StepHead from "./StepHead";
export default {
  name: "StepFour",
  components: {
    StepHead
  },
  data() {
    return {
      fullname: "",
      birthday: "",
      gender: "",
      phone: "",
      address: "",
      job: "",
      location: "",
      pwd: "",
      comfirmPwd: "",
      uploader: []
    };
  }
};
</script>

<style scoped lang="scss">
.step-four {
  .van-form{
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
