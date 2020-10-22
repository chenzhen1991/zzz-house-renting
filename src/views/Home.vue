<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-for="li in list">{{li}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      list: []
    }
  },
  components: {

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
