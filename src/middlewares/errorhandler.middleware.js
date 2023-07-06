const customErrorHandler = async (err, req, res, next) => {
  console.error(err);
  let statusCode = 500;
  if (err.status) {
    statusCode = err.status;
  }
  res.status(statusCode).json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
};

module.exports = customErrorHandler;
