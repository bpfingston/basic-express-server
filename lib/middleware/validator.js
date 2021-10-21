'use strict';

module.exports = function (req, res, next) {
  let { name } = req.query;
  console.log(name);
  if (name) {
    next();
  } else {
    next('no person exists');
  }
};
