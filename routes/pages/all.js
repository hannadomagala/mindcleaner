const express = require("express");
const router = express.Router();
const Task = require("../../models/task");

/* GET all */
router.get("/", async (req, res) => {
  const tasksList = await Task.find({
    done: false
  });
  const number = tasksList.length;
  res.render("tasks", {
    name: "All tasks",
    urlName: "all",
    description: "tasks to be done",
    tasks: tasksList,
    counter: number
  });
});

module.exports = router;
