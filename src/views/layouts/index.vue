<template>
  <div>
    <section>
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </section>
    <BottomNav :data="tabbars" @change="changeValue()" />
  </div>
</template>

<script>
import BottomNav from "@/components/BottomNav";
export default {
  name: "index",
  components: {
    BottomNav
  },
  data() {
    return {
      tabbars: [
        {
          title: "首页",
          to: {
            name: "Home"
          },
          icon: "wap-home"
        },
        {
          title: "球员",
          to: {
            name: "Player"
          },
          icon: "manager"
        },
        {
          title: "集锦",
          to: {
            name: "Collection"
          },
          icon: "video"
        }
      ],
    };
  },
  methods: {
    changeValue(value) {
      console.log(value);
    }
  },
};
</script>

<style scoped></style>
