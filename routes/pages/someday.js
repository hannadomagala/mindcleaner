const express = require("express");
const router = express.Router();
const Task = require("../../models/task");

/* GET somedayk */
router.get("/", async (req, res) => {
  const tasksList = await Task.find({
    someday: true,
    done: false
  });

  const number = tasksList.length;

  res.render("tasks", {
    name: "Someday",
    urlName: "someday",
    description: "tasks waiting to be planned",
    counter: number,
    tasks: tasksList
  });
});

module.exports = router;
