const express = require("express");
const router = express.Router();
const Task = require("../../models/task");

/* GET outside */
router.get("/", async (req, res) => {
  const tasksList = await Task.find({
    contexts: { name: "computer", class: "c-computer" }
  });

  const number = tasksList.length;

  console.log(tasksList);
  res.render("tasks", {
    name: "@computer",
    urlName: "computer",
    description: "tasks to be done on computer",
    tasks: tasksList,
    counter: number
  });
});

module.exports = router;
