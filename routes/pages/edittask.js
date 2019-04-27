var express = require("express");
var router = express.Router();
const Thought = require("../../models/thought");
const Task = require("../../models/task");
const formatDate = require("../../helpers/formatDate");

/* GET edittask */
router.get("/:id", async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id });

  const details = task.details.replace(/<br\s*\/?>/gm, "\n");

  res.render("edittask", {
    name: "Edit task",
    urlName: "edittask",
    task: task,
    date: formatDate(task.date),
    checked: "checked",
    details: details,
    disabled: "disabled"
  });
});

module.exports = router;
