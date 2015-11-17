/**
 * Created by Nick on 17.11.2015.
 */

'use strict';

let express = require('express');
let app = express();
let http = require('http').createServer(app);

let note = require('./controllers/note.controller')

let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send("Server running at" + port);

});

app.get('/api/articles', (req, res) => {
});

app.post('/api/articles', (req, res) => {
});

app.get('/api/articles/:id',(req, res) => {
});

app.put('/api/articles/:id', (req, res) => {
});

app.delete('/api/articles/:id', (req, res) => {
});

app.get('/api/search/:query', (req, res) => {
});

http.listen(port, () => {console.log('listening on *', port);});