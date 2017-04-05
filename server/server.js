const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const card = require('./routes/card');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

app.use('/api/kanban', card);

module.exports = app;