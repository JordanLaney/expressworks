let express = require('express');
let path = require('path');
let app = express();

app.use(express.static(process.argv[3] ||
				path.join(__dirname, 'public')
)).listen(process.argv[2]);
