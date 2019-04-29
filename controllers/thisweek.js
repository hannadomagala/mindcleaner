var express = require("express");
var router = express.Router();
const Task = require("../models/task");
const auth = require("../middlewares/auth");
const moment = require("moment");

/* GET this week */
router.get("/", auth, async (req, res) => {
  const user = req.user;
  const start = moment()
    .startOf("day")
    .format();
  const end = moment()
    .endOf("isoWeek")
    .format();

  const tasksList = await Task.find({
    date: { $gte: start, $lte: end },
    done: false,
    userId: user._id
  });
  const number = await Task.find({
    date: { $gte: start, $lte: end }
  }).count();

  res.render("tasks", {
    name: "This week",
    urlName: "thisweek",
    description: "tasks to be done this week",
    counter: number,
    tasks: tasksList,
    user: user.name,
    userId: user._id
  });
});

module.exports = router;
