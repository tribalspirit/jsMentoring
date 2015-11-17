/**
 * Created by Nick on 17.11.2015.
 */


'use strict';

let express = require('express'),
    router = express.Router(),
    note = require('../controllers/note.controller');

router.get('/articles', note.read);

module.exports = router;
