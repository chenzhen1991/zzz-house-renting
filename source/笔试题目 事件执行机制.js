console.log("start1");
setTimeout(() => {
    console.log("setTime2");
}, 0);
new Promise((resolved, reject) => {
    console.log('promise1')
  setTimeout(() => {
    console.log("setTime1");
    new Promise((resolved, reject) => {
      let a = "1";
      resolved(a);
    }).then(r => {
      console.log(r);
    });
    resolved();
  }, 0);
});


"(", ")" ,"{" ,"}", "[", "]"