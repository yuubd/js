const _ = require('underscore');

var arr = [3,6,9,10,11,14,15,17];

console.log(arr[0]);       // 3
console.log(_.first(arr)); // 3

console.log(arr[arr.length-1]);     
console.log(_.last(arr)); 
function b(v1,v2){return v2-v1};
arr.sort(b);
console.log(arr);