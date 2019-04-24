// imports
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();

// helpers imports
const getWeekDay = require('./helpers/getWeekDay');
const getDay = require('./helpers/getDay');

// pages imports
const indexRouter = require('./routes/pages/index');
const inboxRouter = require('./routes/pages/inbox');
const allRouter = require('./routes/pages/all');
const todayRouter = require('./routes/pages/today');
const thisweekRouter = require('./routes/pages/thisweek');
const somedayRouter = require('./routes/pages/someday');
const waitingRouter = require('./routes/pages/waiting');
const doneRouter = require('./routes/pages/done');

// api imports
const thought = require('./routes/thoughts');

//local variables for pages
app.locals.userName = 'Master';
app.locals.getWeekDay = getWeekDay;
app.locals.getDay = getDay;

// templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// pages setup
app.use('/', indexRouter);
app.use('/inbox', inboxRouter);
app.use('/all', allRouter);
app.use('/today', todayRouter);
app.use('/thisweek', thisweekRouter);
app.use('/someday', somedayRouter);
app.use('/waiting', waitingRouter);
app.use('/done', doneRouter);

// tasks CRUD
app.use('/thoughts', thought);

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