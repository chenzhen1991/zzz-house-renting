function DeepClone(obj) {
  let newObj = Array.isArray(obj) ? [] : {};
  for (let item in obj) {
    if (typeof obj[item] === "object") {
      console.log(obj[item] instanceof RegExp);
      if (obj[item] instanceof RegExp) {
        newObj[item] = obj[item];
      } else {
        newObj[item] = DeepClone(obj[item]);
      }
    } else {
      newObj[item] = obj[item];
    }
  }
  return newObj;
}

const obj = {
  name: 1,
  age: {
    age1: [1, 2, 8],
    year: 2020
  },
  reg: /123/,
  zzz: null
};

const obj1 = DeepClone(obj);
console.log(obj1);
obj1.name = "复制";
obj1.age.age1 = [12, 3455];
obj1.reg = /nihao/;
console.log(obj);
console.log(obj1);
