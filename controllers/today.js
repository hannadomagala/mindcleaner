const express = require("express");
const router = express.Router();
const Task = require("../models/task");
const auth = require("../middlewares/auth");
const moment = require("moment");

/* GET today */
router.get("/", auth, async (req, res) => {
  const user = req.user;
  const start = moment()
    .startOf("day")
    .format();
  const end = moment()
    .endOf("day")
    .format();

  const tasksList = await Task.find({
    date: { $gte: start, $lte: end },
    done: false,
    userId: user._id
  });

  const number = tasksList.length;

  res.render("tasks", {
    name: "Today",
    urlName: "today",
    description: "tasks to be done today",
    counter: number,
    tasks: tasksList,
    user: user.name,
    userId: user._id
  });
});

module.exports = router;
