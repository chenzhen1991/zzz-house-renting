const hi = {
  data() {
    return {
      name: "name"
    };
  },
  methods: {
    addAttr() {
      console.log("组件里面的方法");
    }
  },
  mounted() {
    console.log("this mixin!");
  }
};
export default hi;
