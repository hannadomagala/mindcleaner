var express = require("express");
var router = express.Router();
const Thought = require("../models/thought");
const Task = require("../models/task");
const auth = require("../middlewares/auth");
const formatDate = require("../helpers/formatDate");

/* GET edittask */
router.get("/:id", auth, async (req, res) => {
  const user = req.user;

  const task = await Task.findOne({ _id: req.params.id });

  const details = task.details.replace(/<br\s*\/?>/gm, "\n");

  res.render("edittask", {
    name: "Edit task",
    urlName: "edittask",
    task: task,
    date: formatDate(task.date),
    checked: "checked",
    details: details,
    disabled: "disabled",
    user: user.name,
    userId: user._id
  });
});

module.exports = router;
