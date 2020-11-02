<template>
  <div class="check-code">
    <label for="code">
      <ul class="code-box">
        <li class="code-number" v-for="(item, index) in length" :key="index">{{code[index]}}</li>
      </ul>
    </label>
    <input
        type="number"
        v-model="code"
        class="code-input"
        :maxlength="length"
        id="code"
        @keyup.13="next()"
    />
  </div>
</template>

<script>
export default {
  name: "CheckCode",
  props: {
    length: {
      type: Number,
      default: 6
    }
  },
  data() {
    return {
      code: ""
    };
  },
  methods: {
    next() {
      
    }
  },
};
</script>

<style scoped lang="scss">
.check-code{
  position: relative;
  .code-box {
    border-radius: 8px;
    border:1px solid #ccc;
    display: inline-flex;
    .code-number{
      width: 56px;
      height: 56px;
      line-height: 56px;
      border-right: 1px solid #ccc;
      text-align: center;
      font-size: 30px;
      color: red;
    }
    .code-number:last-child {
      border-right: 0;
    }
  }
  .code-input {
    height: 0.44rem;
    position: fixed;
    outline: none;
    color: transparent;
    text-shadow: 0 0 0 transparent;
    width: 300%;
    margin-left: 100%;
  }
}
</style>
