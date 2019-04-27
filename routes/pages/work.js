const express = require("express");
const router = express.Router();
const Task = require("../../models/task");

/* GET outside */
router.get("/", async (req, res) => {
  const tasksList = await Task.find({
    contexts: { name: "work", class: "c-work" }
  });

  const number = tasksList.length;

  console.log(tasksList);
  res.render("tasks", {
    name: "@work",
    urlName: "work",
    description: "tasks to be done at work",
    tasks: tasksList,
    counter: number
  });
});

module.exports = router;
