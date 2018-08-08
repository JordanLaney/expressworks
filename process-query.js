let express = require('express');
let app = express();

app.get('/search', (req, res) => {
	res.send(req.query);
}).listen(process.argv[2]);
