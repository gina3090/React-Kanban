const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const card = require('./routes/card');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/kanban', card);

module.exports = app;