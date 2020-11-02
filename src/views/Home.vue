<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
<!--    <CheckboxList-->
<!--      :items="items"-->
<!--      :checkArr="checkArr"-->
<!--      @func="onChangeCheck"-->
<!--    />-->
<!--    v-model == value onchange-->
<!--    <CheckboxList-->
<!--        :items="items"-->
<!--        v-model="checkArr"-->
<!--    />-->
<!--    方法三-->
        <CheckboxList
          :items="items"
          :checkArr.sync="checkArr"
        />
  </div>
</template>

<script>
import CheckboxList from "@/components/CheckboxList";
export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          label: "苹果",
          id: "1"
        },
        {
          label: "栗子",
          id: "2"
        },
        {
          label: "梨子",
          id: "3"
        }
      ],
      checkArr: ['1','2']
    };
  },
  components: {
    CheckboxList
  },
  methods: {
    // onChangeCheck(v) {
    //   console.log(v);
    //   this.checkArr = v
    // }
  }
};
</script>
