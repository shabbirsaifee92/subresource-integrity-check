console.log("THE OTHER SCRIPT IS RUNNING");

//this code is parse and run...
let str2 = "";
for (let i = 0; i < 50000; i++) {
  str2 += String.fromCharCode(Math.floor(Math.random() * 60) + 65);
}
console.log(str2.substring(49500)); //last 500 characters