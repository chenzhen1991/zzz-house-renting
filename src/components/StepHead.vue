<template>
  <h3 v-html="title"></h3>
</template>

<script>
export default {
  name: "StepHead",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 10px 0px;
  color: #020433;
  font-size: 30px;
  line-height: 45px;
  text-align: left;
  padding-left: 30px;
  font-weight: normal;
}
</style>
