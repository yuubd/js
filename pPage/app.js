const port = 8080;
const _ = require('underscore');
var express = require('express');
var app = express();
app.locals.pretty = true; // makes pug looks pretty

app.use(express.static('public'));              // access to files
app.listen(port, ()=>{
	console.log(`Connected to ${port} port`);
});

app.set('view engine', 'pug');
app.set('views', './contents')


app.get('/', (req, res)=>{
	res.render('layout');
	var pic =`<img src="/pic.png" id="frontPic">`;
	//var fpic = document.get.ElementById("frontPic");
	//fpic.style.width = "200";
	//fpic.style.height = "200";
	// var intro = `Hello David\'s home page`;
	// var topics = [
	// 	'Education: UBC',
	// 	'Work Experience: a lot',
	// 	'Projects: one or two',
	// 	'Languages: ENG, KOR, and SPAN',
	// 	'Extracurriculum: some',
	// 	'Volunteer: a few'
	// ];
	// var list = '';
	// for(var i=0; i<_.size(topics); i++){
	// 	list += `<li>${topics[i]}</li>`;
	// }
	// var output =`                   
	// 	<a href="/?id=0">- Education</a><br>
	// 	<a href="/?id=1">- Work Experience</a><br>
	// 	<a href="/?id=2">_Projects</a><br>
	// 	<a href="/?id=3">_Languages</a><br>
	// 	<a href="/?id=4">_Extracurriculum</a><br>
	// 	<a href="/?id=5">_Volunteer</a><br>
	// `;
	// //${topics[req.query.id]}
	// res.send(intro +`<br>`+ output +`<br>`+ list);        // renders any number after /topic?id=
});