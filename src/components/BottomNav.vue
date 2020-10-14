<template>
  <div class="footer">
    <van-tabbar fixed route v-model="active" @change="handleChange">
      <van-tabbar-item
        v-for="(item, index) in data"
        :icon="item.icon"
        :key="index"
        :to="item.to"
        >{{ item.title }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "BottomNav",
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      }
    },
    defaultActive: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      active: this.defaultActive
    };
  },
  methods: {
    handleChange(value) {
      this.$emit("change", value);
    }
  }
};
</script>
<style scoped lang="scss"></style>
