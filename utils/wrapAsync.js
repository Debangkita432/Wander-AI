// utils/wrapAsync.js

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(next); // Catch errors and pass them to next middleware
  };
}

module.exports = wrapAsync;
