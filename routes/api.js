/**
 * Created by Nick on 17.11.2015.
 */


'use strict';

let express = require('express'),
    router = express.Router(),
    note = require('../controllers/note.controller');

router.get('/articles', note.read);
router.post('/articles', note.create);
router.put('/articles/:id', note.update);
router.delete('/articles/:id', note.delete);

module.exports = router;
