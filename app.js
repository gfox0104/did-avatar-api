var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const errorHandler = require("./_helpers/error.handler");

require("dotenv").config();

var app = express();

// For developement: Run the frontend app on port 8081 to access this API
var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const router = require("./routes");

app.use("/api/v1", router);

app.use(errorHandler);

module.exports = app;
