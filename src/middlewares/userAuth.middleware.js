const throwError = require("../utils/throwerror");

const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else return throwError("Unauthenticated to perform this action", 401);
};

const isAdmin = (req, res, next) => {
  if (req.session && req.session.user.isAdmin) {
    next();
  } else {
    throwError("Unauthorized to perform this action", 403);
  }
};

module.exports = { isAuthenticated, isAdmin };
