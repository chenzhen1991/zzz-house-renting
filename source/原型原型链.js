function Person() {
  // this.age = 'cz';
  this.getName = function() {
    console.log(this.name);
  };
}
Person.age = '11'
const person = new Person();
// console.log(Person)
// console.log(person)
// console.log(Person.prototype)
// console.log(person.__proto__)
// console.log(Person.prototype === person.__proto__)
// console.log(Person.prototype.__proto__ === person.__proto__.__proto__) // true
// console.log(Person.prototype.__proto__ === Object.prototype) // true
// person.constructor === Person  true
// Person.prototype.name = '陈珍'
Person.prototype.age = 1111
// person.age = 'zouzhirui'
console.log('222222',person.age,Person.age)

// // 继承
// // 原型链继承
// function Per() {}
// Per.prototype = new Person();
// var per1 = new Per();
// // per1.name = '新改编的'
// console.log(per1.name, person.name);
// // 缺点
// // 父级的属性和方法改变了,原型的属性和方法也会跟着改变
// // 不能给父类传递参数
//
// // 构造函数继承
// function We() {
//   Person.call(this, "jer");
//   this.age = "we";
// }
// const we1 = new We();
// console.log(we1.name);
// console.log("37", we1.getName);
// console.log(we1.__proto__);
// //无法实现构造函数的复用
// // 只能继承构造函数的属性不能继承构造函数的方法
//
// // 组合式继承
//
// function Love() {
//   Person.call(this, "love");
// }
// Love.prototype = new Person();
//
// const love = new Love();
// console.log(love.name);
// console.log(love.__proto__);
// // 调用了两次父类的构造函数
//
// // 原型式继承
// function Type(obj) {
//   function F() {}
//   F.prototype = obj;
//   return new F();
// }
