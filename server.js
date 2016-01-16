/**
 * Created by Nick on 17.11.2015.
 */

require("babel-register");

var express = require('express'),
    app = express(),
    index = require('./routes/index'),
    api = require('./routes/api'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    port = process.env.PORT || 3000;

app.use(methodOverride());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));



app.use(express.static(__dirname + '/public'));

app.use('/', index);
app.use('/api', api);

app.listen(port, function(){console.log('listening on *', port);});