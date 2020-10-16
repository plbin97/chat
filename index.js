let express = require('express');
let app = express();
let config = require('./config');
let echoTest = require('./src/echoTest');
let chatRoomTest = require('./src/chatRoomTest');
require('express-ws')(app);

app.get('/*', express.static('./FrontEnd/public'));

app.ws('/test/:par', echoTest);

app.ws('/chattest',chatRoomTest);

app.listen(config.listenOnPort);