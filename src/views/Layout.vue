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
          to: {
            name: "Home"
          },
          icon: "hotel-o"
        },
        {
          to: {
            name: "Like"
          },
          icon: "like-o"
        },
        {
          to: {
            name: "Tips"
          },
          icon: "volume-o"
        },
        {
          to: {
            name: "Collection"
          },
          icon: "newspaper-o"
        },
        {
          to: {
            name: "Collection"
          },
          icon: "more-o"
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