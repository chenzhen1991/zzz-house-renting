<template>
  <div class="pagination">
    <h4>翻页器</h4>
    <div>
      <span @click="goToPrevPage">上</span>
      <span
        v-for="(item, index) in 5"
        :key="index"
        @click="goToNum(item)"
        :class="pager === item ? 'active' : ''"
        >{{ item }}</span
      >
      <div v-if="pageCount > 5">....</div>
      <span @click="gotoNextPage">下</span>
      <div class="to-page">
        <input type="number" v-model="pagerNum" /><button
          @click="gotoInputPage"
        >
          btn
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      pager: "",
      pagerNum: ""
    };
  },
  props: {
    pageSize: {
      type: Number,
      default: 0
    },
    pageCount: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    layout: {
      type: String,
      default: ""
    },
    pageNow: {
      type: Number,
      default: 1
    }
  },
  mounted() {
    this.pager = this.pageNow;
  },
  methods: {
    goToNum(item) {
      this.pager = item;
      this.$emit("update:pageNow", this.pager);
    },
    goToPrevPage() {
      this.pager = this.pager - 1;
      // if (this.pager > 1) {
      //   this.pager = this.pager - 1;
      // } else {
      //   this.pager = 1;
      // }
      this.pager = this.pager > 1 ? this.pager - 1 : 1;
      this.$emit("update:pageNow", this.pager);
    },
    gotoNextPage() {
      // if (this.pager < this.pageCount) {
      //   this.pager = this.pager + 1;
      // } else {
      //   this.pager = this.pageCount;
      // }
      this.pager =
        this.pager < this.pageCount ? this.pager + 1 : this.pageCount;
      this.$emit("update:pageNow", this.pager);
    },
    gotoInputPage() {
      if (this.pagerNum) {
        this.pager = Number(this.pagerNum);
        this.pagerNum = "";
        this.$emit("update:pageNow", this.pager);
      } else {
        alert("请先填写页码");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.pagination {
  span {
    margin: 5px;
    padding: 8px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  .active {
    background-color: red;
  }
  div {
    display: inline-block;
  }
  .to-page {
    input {
      width: 20px;
      height: 26px;
    }
    button {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
