var express = require("express");
var router = express.Router();
const Task = require("../../models/task");
const moment = require("moment");

/* GET this week */
router.get("/", async (req, res) => {
  const start = moment()
    .startOf("day")
    .format();
  const end = moment()
    .endOf("isoWeek")
    .format();

  const tasksList = await Task.find({
    date: { $gte: start, $lte: end },
    done: false
  });
  const number = await Task.find({
    date: { $gte: start, $lte: end }
  }).count();

  res.render("tasks", {
    name: "This week",
    urlName: "thisweek",
    description: "tasks to be done this week",
    counter: number,
    tasks: tasksList
  });
});

module.exports = router;
