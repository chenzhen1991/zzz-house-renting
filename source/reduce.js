Array.prototype.myReduce = function(fn, initValue) {
  // if (this.length === 0) {
  //   return initValue;
  // } else {
  //   this.forEach((item, index) => {
  //     initValue = fn.call(this, initValue, item, index, this);
  //   });
  //   return initValue;
  // }
  let prev = "",
    newValue;
  // if (arguments && arguments.length === 2) {
  //   prev = initValue;
  // } else {
  //   prev = this[0];
  // }
  prev = arguments.length > 1 ? initValue : this[0];

  this.forEach((item, index) => {
    newValue = fn.call(this, prev, item, index, this);
  });
  return newValue;
};

let arr1 = [1, 2, 3, 4];
// // let arr2 = arr1.reduce((initValue, item, index, arr) => {
// //   console.log(initValue, item, index, arr);
// //   return initValue + item;
// // }, 0);
// // console.log(">>>.", arr2);
// let arr3 = arr1.reduce((prev, item, index) => {
//   console.log(prev, item, index);
//   return Math.max(prev, item);
// }, 0);
// console.log("27hang", arr3);
// let arr3 = arr1.myReduce((initValue, item, index, arr1) => {
//   console.log(initValue, item, index, arr1);
//   return initValue + item;
// }, 0);
// console.log(arr3);

let arr4 = arr1.myReduce((prev, item, index) => {
  // console.log(prev, item, index);
  return Math.max(prev, item);
});
console.log("48hang", arr4);

// let Arr = [{ a: 1 }, { a: 2 }, { a: 3 }];
// [{a:1}]

// let Arr1 = Arr.reduce((initValue, item, index, arr) => {
//   if (item.a === 1) {
//     initValue.push(item);
//   }
//   return initValue;
// }, []);
// console.log(Arr1);

// let Arr2 = Arr.myReduce((initValue, item, index, arr) => {
//   if (item.a === 1) {
//     initValue.push(item);
//   }
//   return initValue;
// }, []);
// console.log(Arr2);
