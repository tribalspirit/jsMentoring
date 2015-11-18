/**
 * Created by Nick on 17.11.2015.
 */

'use strict';

let NoteModel = require('../models/note.model').Note;

module.exports = {

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
    read: (req, res) => {
        return NoteModel.find(
             (err, articles) => {
                if (!err) {
                    return res.send(articles);
                } else {
                    return res.send({ error: 'Server error' });
                }
            });
    },
    update: (req, res) => {

    },
    delete: (req, res) => {

    }

}