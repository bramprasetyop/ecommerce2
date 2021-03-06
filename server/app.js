//===================== mongoose =========
require('dotenv').config()

const mongoose = require("mongoose");
// mongoose.connect('mongodb:ecommerce:BHGFDSAQ1@ds237660.mlab.com:37660/book-library-mongo')

const mongoUser = process.env.MONGO_USER
const mongoPass = process.env.MONGO_PASS

mongoose.connect(`mongodb://${mongoUser}:${mongoPass}@ds237660.mlab.com:37660/book-library-mongo`)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected to db')
});

//===================== mongoose =========


const cors =require('cors')

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/items");
var usersRouter = require("./routes/users");
var jwt = require('jsonwebtoken');

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors())

app.use("/home", indexRouter);
app.use("/customer", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
