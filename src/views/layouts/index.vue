<template>
  <div>
    <section>

    </section>
    <footer>
      <BottomNav :data="tabbars"/>
    </footer>
  </div>
</template>

<script>
import BottomNav from '@/components/BottomNav'
export default {
  name: "index",
  components: {
    BottomNav
  },
  data() {
    return{
      tabbars:[
        {
          title: '首页',
          to: {
            name: 'Home'
          },
          icon: 'wap-home'
        },
        {
          title: '球员',
          to: {
            name: 'Player'
          },
          icon: 'manager'
        },
        {
          title: '集锦',
          to: {
            name: 'Collection'
          },
          icon: 'video'
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>