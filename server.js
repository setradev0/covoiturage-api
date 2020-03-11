let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let server = express();
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(bodyParser.json({type: 'application/vnd.api+json'}));
server.use(cors());
let db = require('./config/db');
require('./routes/user')(server);

db.once('open', _ => {
    console.log('mety');
});

db.on('error', err => {
    console.log(err);
});




server.listen(3001, () => {
    console.log('connect on port 3001');
});