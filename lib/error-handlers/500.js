'use strict';


module.exports = function (err, req, res, next) {
  if (typeof req.query !== 'string' || req.query === ''){
    res.status(500).send('Error');
  } else {
    res.status(200);
  }
};