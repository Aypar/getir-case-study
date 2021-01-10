const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express()

app.use(bodyParser.json())
app.use('/api', routes)

mongoose.connect(config.database.uri);

const server = app.listen(config.server.port, config.server.host)

module.exports = {app,server};

