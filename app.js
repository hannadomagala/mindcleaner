// packages imports
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const config = require("config");
const app = express();

// helpers imports
const getWeekDay = require("./helpers/getWeekDay");
const getDay = require("./helpers/getDay");

// pages routers imports
const loginRouter = require("./controllers/login");
const inboxRouter = require("./controllers/inbox");
const allRouter = require("./controllers/all");
const todayRouter = require("./controllers/today");
const thisweekRouter = require("./controllers/thisweek");
const somedayRouter = require("./controllers/someday");
const waitingRouter = require("./controllers/waiting");
const doneRouter = require("./controllers/done");
const addRouter = require("./controllers/addtask");
const editRouter = require("./controllers/edittask");

// pages contexts routers imports
const outsideRouter = require("./controllers/outside");
const computerRouter = require("./controllers/computer");
const workRouter = require("./controllers/work");
const phoneRouter = require("./controllers/phone");
const homeRouter = require("./controllers/home");
const shoppingRouter = require("./controllers/shopping");

// routers imports
const thoughts = require("./routes/thoughts");
const tasks = require("./routes/tasks");
const users = require("./routes/users");
const auth = require("./routes/auth");

// local variables for pages
app.locals.getWeekDay = getWeekDay;
app.locals.getDay = getDay;

// templates setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// pages setup
app.use("/", inboxRouter);
app.use("/inbox", inboxRouter);
app.use("/all", allRouter);
app.use("/today", todayRouter);
app.use("/thisweek", thisweekRouter);
app.use("/someday", somedayRouter);
app.use("/waiting", waitingRouter);
app.use("/done", doneRouter);
app.use("/addtask", addRouter);
app.use("/edittask", editRouter);

// contexts pages setus
app.use("/outside", outsideRouter);
app.use("/computer", computerRouter);
app.use("/work", workRouter);
app.use("/phone", phoneRouter);
app.use("/home", homeRouter);
app.use("/shopping", shoppingRouter);

// api
app.use("/thoughts", thoughts);
app.use("/tasks", tasks);
app.use("/users", users);
app.use("/auth", auth);
app.use("/logout", auth);

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined.");
  process.exit(1);
}

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
