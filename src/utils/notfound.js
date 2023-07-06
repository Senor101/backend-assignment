const notFound = async (req, res, next) => {
  res.status(404).json({
    error: {
      message: "Page Not found",
    },
  });
};

module.exports = notFound;
