let arr = [1, 3, 4, 5, 5, 6];
// 1.new Set()
console.log(new Set(arr));

// 2. indexOf, includes
let newArr = [];
arr.forEach(item => {
  if (newArr.indexOf(item) > -1) return;
  newArr.push(item);
});
console.log(newArr);

// 3. Object.values Object.keys
let newObj = {};
arr.forEach(item => {
  newObj[item] = item;
});
console.log(">>>>", Object.values(newObj));

// 4.ES6 map
let es6Arr = [];
arr.map(item => {
  if (es6Arr.includes(item)) return;
  es6Arr.push(item);
});
console.log(es6Arr);

// 5. filter
let y = arr.filter((item, index, x) => {
  // console.log(item, index, x)
  console.log(">>>", x.indexOf(item), index);
  return x.indexOf(item) === index;
});
console.log(y);

let a = { x: 3, y: 4 };
let objArr = [{ x: 1, y: 2 }, a, a];
// console.log(objArr[1] === objArr[2])
// console.log(objArr.includes(a))
// console.log([{x:1, y: 2}, {x: 3, y:4}].includes({x:1,y:2}))
// 1. let in of objArr
let ArrUni = [];
for (const objArrKey in objArr) {
  // console.log('>>', objArrKey, objArr[objArrKey])
  // if (ArrUni.includes(objArr[objArrKey])) return
  // ArrUni.push(objArr[objArrKey])
  if (
    !ArrUni.some(item => {
      return JSON.stringify(item) === JSON.stringify(objArr[objArrKey]);
    })
  ) {
    ArrUni.push(objArr[objArrKey]);
  }
}
console.log(">>>ArrUni", ArrUni);

// reduce
let endValue = objArr.reduce((initValue, item, index, self)=>{
    console.log(self)
    // if (!initValue.some(li=>{return JSON.stringify(li) === JSON.stringify(item)})){
    //     initValue.push(item)
    // }
    !initValue.some(li=>{return JSON.stringify(li) === JSON.stringify(item)}) ? initValue.push(item) : null
    return initValue
}, [])

console.log('>>>>>endValue', endValue)
let ax = []
objArr.forEach(li=>{
    !ax.map(item=> item.x).includes(li.x) ? ax.push(li) : null
})

console.log('>>>>>>>ax', ax)
