let express = require('express');
let app = express();

app.put('/message/:id', (req, res) => {
	res.send(require('crypto')
						.createHash('sha1')
						.update(new Date().toDateString() 
						+ req.params.id).digest('hex')
	);
}).listen(process.argv[2]);
