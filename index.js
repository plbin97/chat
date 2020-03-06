let express = require('express');
let app = express();
let config = require('./config');
let echoTest = require('./src/echoTest');
require('express-ws')(app);

app.get('/', express.static('./fontEnd'));

app.ws('/test', echoTest);

app.listen(config.listenOnPort);