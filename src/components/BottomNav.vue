<template>
  <footer class="footer" v-if="isShowTabs">
    <van-tabbar fixed route v-model="active" @change="handleChange">
      <van-tabbar-item
        v-for="(item, index) in data"
        :icon="item.icon"
        :key="index"
        :to="item.to"
        >{{ item.title }}</van-tabbar-item
      >
    </van-tabbar>
  </footer>
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
      active: this.defaultActive,
      isShowTabs: true
    };
  },
  methods: {
    handleChange(value) {
      this.$emit("change", value);
    }
  },
  watch: {
    $route: {
      handler: function() {
        // console.log(this.$route);
        const arr = ["Home", "Player", "Collection"];
        // if (
        //   this.$route.name !== "Home" ||
        //   this.$route.name !== "Player" ||
        //   this.$route.name !== "Collection"
        // ) {
        //   this.isShowTabs = false;
        // }
        // if (!arr.includes(this.$route.name)) {
        //   this.isShowTabs = false;
        // } else {
        //   this.isShowTabs = true;
        // }
        this.isShowTabs = arr.includes(this.$route.name) ? true : false;
        console.log(this.isShowTabs);
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style scoped lang="scss">
footer {
  z-index: 1;
}
</style>
