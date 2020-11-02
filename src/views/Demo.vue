<template>
  <div>
    demo
<!--    <Pagination-->
<!--      :pageSize="20"-->
<!--      :pageCount="10"-->
<!--      layout="prev, pager, next"-->
<!--      :total="101"-->
<!--      :pageNow.sync="pageNow"-->
<!--    />-->
    <CheckCode v-model="code" v-on:func="show" :length="length" />
  </div>
<!--  <el-pagination
  :page-size="20"
  :pager-count="11"
  layout="prev, pager, next"
  :total="1000">
</el-pagination>-->
</template>

<script>
// import Pagination from "@/components/Pagination";
import CheckCode from "@/components/CheckCode";
export default {
  name: "Demo",
  data() {
    return {
      pageNow: 1,
      code: "",
      length: 6
    }
  },
  components:{
    // Pagination,
    CheckCode
  },
  mounted() {
    console.log(this.pageNow)
  },
  methods: {
    show() {
      
    }
  },
};
</script>

<style scoped></style>
