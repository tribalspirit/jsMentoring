/**
 * Created by Nick on 17.11.2015.
 */

'use strict';

let express = require('express'),
    app = express(),
    http = require('http').createServer(app),
    index = require('./routes/index'),
    api = require('./routes/api'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.use('/', index);
app.use('/api', api);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

http.listen(port, () => {console.log('listening on *', port);});