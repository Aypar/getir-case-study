const router = require('express').Router();
const Records = require('./records/records.controller.js');

router.use('/records', Records);

module.exports = router;


