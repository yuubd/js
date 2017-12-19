const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => { // making a server make the server listening to this computer
  res.statusCode = 200;                          // the return value here is server
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');                     // the response of listen
});

server.listen(port, hostname, () => {           // two arguments make the server to listen to port # 3000 and response to the user using '127.0.0.1'
  console.log(`Server running at http://${hostname}:${port}/`);
});
// web server code // running through node gives http://127.0.0.1:3000/ where all code in webserver.js will show

var setNameAndId = (id, name) => ({id: id, name: name});
const david = setNameAndId(57181159, 'david');
console.log(david.id + " , " + david.name);
var davidGrades = [
	{course: "CPSC110", grade: 99},
	{course: "INTS110", grade: 93},
	{course: "CPSC210", grade: 83},
	{course: "CPSC213", grade: 'undetermined'},
];
console.log(davidGrades.grade);

