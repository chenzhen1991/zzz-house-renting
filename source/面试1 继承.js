function A() {
  this.name = "a";
}
A.prototype.age = "10";
var a = new A()
console.log(a)

function B() {
  this.number = 1;
}
B.prototype = new A()

var b = new B()

/*这样b就可以继承到相关的属性*/

console.log(b.name, b.number, b.age)


let we = ['welcome','me'].map((item, index) => `/${['welcome','me'].slice(0, index + 1).join('/')}`)
console.log(we)