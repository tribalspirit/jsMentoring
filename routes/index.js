/**
 * Created by Nick on 17.11.2015.
 */

'use strict';

let express = require('express'),
    router = express.Router();

router.get('/', (req, res) => res.sendfile('index.html'));

module.exports = router;
