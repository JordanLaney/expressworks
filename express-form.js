var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', (req, res) => {
	res.send(req.body.str.split('').reverse().join(''));
}).listen(process.argv[2]);
