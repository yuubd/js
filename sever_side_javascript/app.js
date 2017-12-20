var express = require('express');
var app = express();
app.locals.pretty = true; // makes pug looks pretty
app.use(express.static('public')); // setting a directory where all the static files locate
app.set('view engine', 'pug');     // specifying the engine
app.set('views', './views');       // tradition that pug requires views dir

app.get('/', (req, res) => {  // '/' == home  // through URL == get  // use function to displaty whatever I want to show
	res.send('Hello David\'s home page <img src="/pic.png">');
});
app.get('/dynamic', function(req, res){
	var list = '';
	for(var i=0; i<5; i++){
		list += '<li>coding</li>';
	}
	var time = Date();
	var output = 
	`<!DOCTYPE html>
		<html>
		<head>
			<meta charset="utf-8">
			<title></title>
		</head>
		<body>
			Hello, dynamic
			${list}
			${time}<br />
			${time}
		</body>
		</html>
	`;
	res.send(output);

});
app.get('/login', (req, res) => { 
	res.send('<h1>No need to login! Go back to Home</h1>');
});

app.listen(3000, function(){  // assign a port number
	console.log('Connected 3000 Port!');
});

app.get('/index', function(req, res) {
	res.render('index', {title:'David\' Page', message: 'Hi there!', time: Date()})
});











