var express = require("express");
var router = express.Router();
const Task = require("../../models/task");

/* GET waiting */
router.get("/", async (req, res) => {
  const tasksList = await Task.find({
    waiting: true,
    done: false
  });

  const number = tasksList.length;

  res.render("tasks", {
    name: "Waiting",
    urlName: "waiting",
    description: "tasks waiting to be done by someone",
    counter: number,
    tasks: tasksList
  });
});

module.exports = router;
