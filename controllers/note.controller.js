/**
 * Created by Nick on 17.11.2015.
 */

'use strict';

let NoteModel = require('../models/note.model');

module.exports.NoteController = {

    create: (req, res) => {
        let note = new NoteModel({
            title: req.body.title,
            content: req.body.content,
        });

        note.save(function (err) {
            if (!err) {
                return res.send({ status: 'OK', note:note });
            } else {
                console.log(err);
            }
        });
    },
    update: (req, res) => {},
    delete: (req, res) => {},
    read: (req, res) => {
        return NoteModel.find((error, articles) => {
            if (!err) {
                return res.send(articles);
            } else {
                res.statusCode = 500;
                return res.send({ error: 'Server error' });
            }
        });
    },
    readById: (req, res) => {}

}