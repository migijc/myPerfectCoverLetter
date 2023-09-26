const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose')
const mongodb = require('mongodb')

//require dotenv to use process.env for secret keys
require('dotenv').config()

//initiate connection with mongo to use freely across app.
mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

//ROUTERS
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const coverLetterRouter = require('./routes/coverLetter')
const authorsRouter = require('./routes/authors')
const blogsRouter = require('./routes/blogs')




const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/coverletter', coverLetterRouter)
app.use('/admin/author', authorsRouter)
app.use('/admin/blogs', blogsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
