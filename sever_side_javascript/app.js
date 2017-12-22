var express = require('express');
var app = express();
var bodyParser = require('body-parser');  // brought body-parser module           
app.locals.pretty = true; // makes pug looks pretty
app.use(express.static('public')); // setting a directory where all the static files locate
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set('view engine', 'pug');     // specifying the engine
app.set('views', './views');       // tradition that pug requires views dir
app.get('/login', (req, res) => { 
	res.send('<h1>No need to login! Go back to Home</h1>');
});

app.listen(3000, function(){  // assign a port number
	console.log('Connected 3000 Port!');
});

app.get('/index', function(req, res) {
	res.render('index', {message2:'David\'s Page', message: 'Hi there!', time: Date()})
});

app.get('/', (req, res) => {  // '/' == home  // through URL == get  // use function to displaty whatever I want to show
	var pic = `<img src="/pic.png" id='fpic'>`;
	//var myimg = document.getElementById('fpic');
	res.send(`Hello David\'s home page ${pic}`);
});

app.get('/form', (req,res)=>{     // build a form
	res.render('form');
});

app.post('/form_receiver', (req,res)=>{  // it saves the info from form(action='/form_receiver')
	var title = req.body.title;          // get=query, post=body
	var description = req.body.description;
	res.send(title +', '+ description);
});

app.get('/form_receiver', (req,res)=>{  // it saves the info from form(action='/form_receiver')
	var title = req.query.title;
	var description = req.query.description;
	res.send(title +', '+ description);
});

app.get('/topic/:id', (req, res)=>{    // /topic?id=     **'/topic/:id'
	var topics = [                 // can be replaced by db
		'Languages: ENG, KOR, and SPAN',
		'Education: UBC',
		'Work Experience: a lot',
		'Extracurriculum: some',
		'Volunteer: a few'
	];
	var output =`                   
		<a href="/topic/0">Languages</a><br>
		<a href="/topic/1">Education</a><br>
		<a href="/topic/2">Work Experience</a><br>
		<a href="/topic/3">Extracurriculum</a><br>
		<a href="/topic/4">Volunteer</a><br>
		${topics[req.params.id]}   
	`;      // topics[req.params.id] if '/topic/:id'
			// topics[req.query.id] if  '/topic'
	res.send(output);        // renders any number after /topic?id=
})


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











