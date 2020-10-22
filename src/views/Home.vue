<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div v-for="li in list">{{li}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  data() {
    return {
      list: []
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    setTimeout(()=>{
      for (let i = 0; i < 100000; i++) {
        this.list.push(i)
      }
    },2000)

  }
};
</script>
