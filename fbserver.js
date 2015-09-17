var express = require('express'); // get express module
var app = express(); // start express and get it in app variable
var common = require('./public/common');
var bodyParser = require('body-parser');
var ejs = require('ejs');

app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req,res){ 
    res.render('pages/index');
})

app.post('/', testifelseusernameServer);


// server specific code for if else test
function testifelseusernameServer(req, res) {
    var username = req.body.input.username;
    var password = req.body.input.password; // req.body.age create a json
    var returned = common.testifelseusername({
        "username": username,
        "password": password
    }); //
    res.send(returned);
}

app.get('/post', function(req,res) {
	res.render('pages/post');
});


var server = app.listen(8080, function() {
    console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
});
