console.log("THE SCRIPT IS RUNNING");

//this code is parse and run...
let str = "";
for (let i = 0; i < 50000; i++) {
  str += String.fromCharCode(Math.floor(Math.random() * 60) + 65);
}
console.log(str.substring(49500)); //last 500 characters