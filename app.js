// imports
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// pages imports
const indexRouter = require('./routes/pages/index');
const inboxRouter = require('./routes/pages/inbox');
const allRouter = require('./routes/pages/all');
const todayRouter = require('./routes/pages/today');
const thisweekRouter = require('./routes/pages/thisweek');
const somedayRouter = require('./routes/pages/someday');
const waitingRouter = require('./routes/pages/waiting');
const doneRouter = require('./routes/pages/done');
// const usersRouter = require('./routes/users');

// api imports


const app = express();
app.locals.userName = 'Master';

// templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// pages
app.use('/', indexRouter);
app.use('/inbox', inboxRouter);
app.use('/all', allRouter);
app.use('/today', todayRouter);
app.use('/thisweek', thisweekRouter);
app.use('/someday', somedayRouter);
app.use('/waiting', waitingRouter);
app.use('/done', doneRouter);
// app.use('/users', usersRouter);

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