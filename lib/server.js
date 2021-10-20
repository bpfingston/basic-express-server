'use strict';

const express = require('express');
const app = express();
const validator = require('./middleware/validator');
const logger = require('./middleware/logger');
const e404 = require('./error-handlers/404.js');
const e500 = require('./error-handlers/500.js');


app.use(express.json());
app.use(logger);
app.get('/person', validator, (req,res) => {
  let name = req.query;
  res.send(name);
});

app.use('*', e404);
app.use(e500);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('server listening on', port));
  },
};