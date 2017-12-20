var fs = require('fs');

//Sync
console.log('a');
var data = fs.readFileSync('note.txt', {encoding:'utf8'}); // reading the file as utf8 method
console.log('b');
console.log(data); // if reading takes 10 mins, then waits 10 min then display
console.log('c');
// a b c file

//Async
console.log(2);
fs.readFile('note.txt', {encoding:'utf8'}, function(err, data){
	console.log(3);
	console.log(data);  // call the function when readfile is completed
});
console.log(4);
// 2 3 4 file