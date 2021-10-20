'use strict';

module.exports = function (err, req, res, next) {
  let { person } = req.query;
  console.log(person);
  if (person) {
    next();
  } else {
    next('no person exists');
  }
};
