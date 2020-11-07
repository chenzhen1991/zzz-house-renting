// 6，有六个字符串
// "(", ")" ,"{" ,"}", "[", "]"
// 我们需要利用他们组成一个新的字符串，需要满足的条件是：1，字符串的第一个和最后一个是对应的关系或者是他们闭合按照顺序排列
// 比如“（{}）”  为true
// "{}()[]" 为true
// "{]"  为false
// "()" 为true

function checkIsForRule(str) {
  console.log(str[0], str[str.length - 1]);
  for (let i = 0; i < str.length; i++) {
    //     console.log(str[i])
    if (str[0] === str[str.length - 1]) {
      return true;
    }
  }
}
checkIsForRule("([])");
