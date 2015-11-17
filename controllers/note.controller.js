/**
 * Created by Nick on 17.11.2015.
 */

'use strict';

let NoteModel = require('../models/note.model');

module.exports = {

    create: (req, res) => {
        console.log(req.body);
        console.log(req.params);
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
    read: function(req, res){
        console.log('dddd');
        let js = [
            {title: 'sfdsdf',
                content: 'Lorem ipsum sdfsdfsdfsdf'},

            {title: 'title2',
                content: 'Lorem ipsum sdfsdfsdfsdf'},

            {title: 'title3',
                content: 'Lorem ipsum sdfsdfsdfsdf'},

            {title: 'title4',
                content: 'Lorem ipsum sdfsdfsdfsdf'}
                ];
        res.json(js);

        //return NoteModel.find((error, articles) => {
        //    if (!err) {
        //        return res.send(articles);
        //    } else {
        //        res.statusCode = 500;
        //        return res.send({ error: 'Server error' });
        //    }
        //});
    },

    readById: (req, res) => {}

}