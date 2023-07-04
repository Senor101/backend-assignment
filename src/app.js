const express = require("express");
const helmet = require("helmet");

const apiRouter = require("./routes/api");
const notFound = require("./middlewares/notfound");
const customErrorHandler = require("./middlewares/errorhandler");

const app = express();

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("./api/v1", apiRouter);

app.use(notFound);
app.use(customErrorHandler);

module.exports = app;
