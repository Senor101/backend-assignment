const express = require("express");
const helmet = require("helmet");
const session = require("express-session");
require("dotenv").config();

const apiRouter = require("./routes/api");
const notFound = require("./utils/notfound");
const customErrorHandler = require("./middlewares/errorhandler.middleware");

const app = express();

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/api/v1", apiRouter);

app.use(notFound);
app.use(customErrorHandler);

module.exports = app;
