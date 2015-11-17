/**
 * Created by Nick on 17.11.2015.
 */

'use strict';

let express = require('express'),
    app = express(),
    http = require('http').createServer(app),
    index = require('./routes/index'),
    api = require('./routes/api'),
    port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.use('/', index);
app.use('/api', api);

//
//app.get('/api/articles/:id',(req, res) => {
//});
//
//app.put('/api/articles/:id', (req, res) => {
//});
//
//app.delete('/api/articles/:id', (req, res) => {
//});
//
//app.get('/api/search/:query', (req, res) => {
//});

http.listen(port, () => {console.log('listening on *', port);});