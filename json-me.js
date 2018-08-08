var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', (req, res) => {
	fs.readFile(process.argv[3], (err, data) => {
		if(err) throw err;
		res.json(JSON.parse(data));
	});
}).listen(process.argv[2]);
