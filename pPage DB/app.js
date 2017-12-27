const port = 8000;
var express = require('express');
var app = express();
app.listen(port, ()=>{
	console.log(`Connected to ${port} port`);
});

app.use(express.static('public'));  
app.set('view engine', 'html');
app.set('view', './');