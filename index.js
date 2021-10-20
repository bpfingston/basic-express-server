'use strict';

const app = require('./lib/server.js');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3001;

app.start(PORT);