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
             (err, notes) => {
                if (!err) {
                    return res.send(notes);
                } else {
                    return res.send({ error: 'Server error' });
                }
            });
    },
    update: (req, res) => {
    return NoteModel.findById(req.params.id, (err, note) => {
        if(!note) {
            return res.send({ error: 'Not found' });
        }

        note.title = req.body.title;
        note.content = req.body.content;
        note.modified = Date.now();

        return note.save((err) => {
            if (!err) {
                return res.send({ status: 'OK', note: note });
            } else {
                return res.send({error: err.message});
            }
        });
    });
    },
    delete: (req, res) => {
    return NoteModel.findById(req.params.id, (err, note) => {
            if(!note) {
                return res.send({ error: 'Not found' });
            }
            return note.remove(function (err) {
                if (!err) {
                    return res.send({ status: 'OK' });
                } else {
                    return res.send({ error: 'Server error' });
                }
        });
    });
    }

}