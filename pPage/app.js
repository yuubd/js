const port = 8080;
const _ = require('underscore');
const path = require('path');     // need to pull in the built-in path module so that we can link to the file.
const CONTENTS = path.join(__dirname, 'contents'); //always the directory in which the currently executing script resides
var express = require('express');
var app = express();
app.locals.pretty = true; // makes pug looks pretty

app.use(express.static('public'));              // access to files
app.listen(port, ()=>{
	console.log(`Connected to ${port} port`);
});

app.set('view engine', 'html');
app.set('views', './contents')


app.get('/', (req, res)=>{
	res.sendFile('test.html', {root: CONTENTS});
	//var pic =`<img src="/pic.png" id="frontPic">`;
	// //${topics[req.query.id]}
	// res.send(intro +`<br>`+ output +`<br>`+ list);        // renders any number after /topic?id=
});