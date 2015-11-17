/**
 * Created by Nick on 17.11.2015.
 */

'use strict';

let mongoose = require('mongoose');

mongoose.connect('mongodb://tibal:d1a2s3H@troup.mongohq.com:10085/app22322889');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error:', err.message);
});

db.once('open', function callback() {
    console.log("Connected to DB!");
});

let Schema = mongoose.Schema;

let Note = new Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    created: {type: Date, default: Date.now},
    modified: {type: Date, default: Date.now}
});

let NoteModel = mongoose.model('Note', Note);

module.exports.Note = NoteModel;