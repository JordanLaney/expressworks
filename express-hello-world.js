var exp = require('express');
var app = exp();

app.get('/home', (req, res) => {
	res.end('Hello World!');
}).listen(process.argv[2]);
