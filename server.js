let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io').listen(server);
let jwtSocket = require('socketio-jwt');
let config = require('./config/.env');
io.on('connection', jwtSocket.authorize({
    secret: config.jwt_secret,
    timeout: 15000
}));
require('./controller/SocketController')(io);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(cors());
let db = require('./config/db');
require('./routes/user')(app);

db.once('open', _ => {
    console.log('mety');
});

db.on('error', err => {
    console.log(err);
});




server.listen(3001, () => {
    console.log('connect on port 3001');
});