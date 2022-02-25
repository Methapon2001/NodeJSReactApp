'use strict';
const express = require('express');
const cors = require('cors');
const path = require('path');
const user = require('./database/user');
const city = require('./database/city');

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api/data', user.get);
app.post('/api/data', user.create);
app.put('/api/data/:id', user.update);
app.delete('/api/data/:id', user.delete);
app.get('/api/cities', city.get);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = app;