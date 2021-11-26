'use strict';
require('dotenv').config();
const fs = require('fs');
const https = require('https');
const app = require('./app');

const httpsServer = https.createServer({
  key: fs.readFileSync(__dirname + '/cert/server.key'),
  cert: fs.readFileSync(__dirname + '/cert/server.crt')
}, app);

const PORT = process.env.PORT || 5000;

httpsServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});