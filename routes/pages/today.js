const express = require("express");
const router = express.Router();
const Task = require("../../models/task");
const moment = require("moment");

/* GET today */
router.get("/", async (req, res) => {
  const start = moment()
    .startOf("day")
    .format();
  const end = moment()
    .endOf("day")
    .format();

  const tasksList = await Task.find({
    date: { $gte: start, $lte: end },
    done: false
  });

  const number = tasksList.length;

  res.render("tasks", {
    name: "Today",
    urlName: "today",
    description: "tasks to be done today",
    counter: number,
    tasks: tasksList
  });
});

module.exports = router;
