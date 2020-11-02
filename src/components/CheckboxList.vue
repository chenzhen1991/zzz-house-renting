<template>
  <div>
    <h4>复选框</h4>
    <!--方法一-->
    <!--    <input-->
    <!--      type="checkbox"-->
    <!--      @change="e => changeCheckAll(e)"-->
    <!--      :checked="items.length === checkArr.length"-->
    <!--    /><label>全选</label>-->
    <!--    <div v-for="item in items" :key="item.label">-->
    <!--      <input-->
    <!--        type="checkbox"-->
    <!--        :value="item.id"-->
    <!--        :checked="checkArr.includes(item.id)"-->
    <!--        @change="e => onChangeCheckbox(e)"-->
    <!--      />-->
    <!--      <label>{{ item.label }}</label>-->
    <!--    </div>-->
    <!--方法二 利用v-model语法糖-->
    <!--    <input-->
    <!--        type="checkbox"-->
    <!--        :value="value"-->
    <!--        @change="changeCheckAll"-->
    <!--        :checked="items.length === value.length"-->
    <!--    /><label>全选</label>-->
    <!--    <div v-for="item in items" :key="item.label">-->
    <!--      <input-->
    <!--          type="checkbox"-->
    <!--          :value="item.id"-->
    <!--          :checked="value.includes(item.id)"-->
    <!--          @change="onChangeCheckbox"-->
    <!--      />-->
    <!--      <label>{{ item.label }}</label>-->
    <!--    </div>-->
    <!--方法三-->
    <input
      type="checkbox"
      @change="e => changeCheckAll(e)"
      :checked="items.length === checkArr.length"
    /><label>全选</label>
    <div v-for="item in items" :key="item.label">
      <input
        type="checkbox"
        :value="item.id"
        :checked="checkArr.includes(item.id)"
        @change="e => onChangeCheckbox(e)"
      />
      <label>{{ item.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckboxList",
  data() {
    return {
      ids: [],
      isAllChecked: false
    };
  },
  props: {
    items: {
      type: Array
    },
    checkArr: {
      type: Array
    },
    // func: {
    //   type: Function
    // }
    value: {
      type: Array
    }
  },
  mounted() {
    this.ids = this.value;
  },
  methods: {
    // onChangeCheckbox(e) {
    //   if (e.target.checked) {
    //     this.ids.push(e.target.value);
    //   } else {
    //     const index = this.ids.indexOf(e.target.value);
    //     if (index > -1) {
    //       this.ids.splice(index, 1);
    //     }
    //   }
    //   // this.$emit('func', this.ids)
    //   this.checkArr = this.ids
    // },
    // changeCheckAll(e) {
    //   if (e.target.checked) {
    //     this.ids = this.items.map(item => item.id);
    //   } else {
    //     this.ids = [];
    //   }
    //   this.$emit('func', this.ids)
    // }
    // onChangeCheckbox(e) {
    //   if (e.target.checked) {
    //     this.ids.push(e.target.value);
    //   } else {
    //     const index = this.ids.indexOf(e.target.value);
    //     if (index > -1) {
    //       this.ids.splice(index, 1);
    //     }
    //   }
    //   this.$emit("input", this.ids);
    // },
    // changeCheckAll(e) {
    //   if (e.target.checked) {
    //     this.ids = this.items.map(item => item.id);
    //   } else {
    //     this.ids = [];
    //   }
    //   this.$emit("input", this.ids);
    // }
    onChangeCheckbox(e) {
      if (e.target.checked) {
        this.ids.push(e.target.value);
      } else {
        const index = this.ids.indexOf(e.target.value);
        if (index > -1) {
          this.ids.splice(index, 1);
        }
      }
      this.$emit("update:checkArr", this.ids);
    },
    changeCheckAll(e) {
      if (e.target.checked) {
        this.ids = this.items.map(item => item.id);
      } else {
        this.ids = [];
      }
      this.$emit("update:checkArr", this.ids);
    }
  }
};
</script>

<style scoped></style>
