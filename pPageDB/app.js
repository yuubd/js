const port = 8000;
const path = require('path');     // need to pull in the built-in path module so that we can link to the file.
const CONTENTS = path.join(__dirname, 'contents'); //always the directory in which the currently executing script resides
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var mongodb = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

app.use(express.static('public'));              // access to files
app.listen(port, ()=>{
	console.log(`Connected to ${port} port`);
});

app.use(express.static('public'));  
app.set('view engine', 'html');
app.set('views', './contents')


app.get('/', (req, res)=>{
    
	res.sendFile('index.html', {root: CONTENTS});
	//var pic =`<img src="/pic.png" id="frontPic">`;
	// //${topics[req.query.id]}
	// res.send(intro +`<br>`+ output +`<br>`+ list);        // renders any number after /topic?id=
});

app.get('/admin/new', (req,res)=>{
    res.sendFile('/admin/new.html', {root: CONTENTS});
});

app.post('/topic', (req,res) => {
    var topic = req.body.topic;
    var side = req.body.side;
    var bodyc = req.body.bodyc;
    var description = req.body.description;
    mongodb.connect(url, (err, client)=>{
        if(err) return console.log('error!');
        var db = client.db('personalPagedb');
        var saveIt = {topic : topic, side : side, bodyc : bodyc, description : description };
        db.collection(topic).insertOne(saveIt, (err, result)=>{
            if(err) return console.log('error!');
            console.log('success ' +result+ '!');
            res.redirect('/');      
        });
        client.close();
    });
});
            

app.get('/backup', (req, res)=>{
	res.sendFile('saved.html', {root: CONTENTS});
});
app.set('view', './');