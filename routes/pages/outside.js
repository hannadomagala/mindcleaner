const express = require("express");
const router = express.Router();
const Task = require("../../models/task");

/* GET outside */
router.get("/", async (req, res) => {
  const tasksList = await Task.find({
    contexts: { name: "outside", class: "c-outside" }
  });

  const number = tasksList.length;

  console.log(tasksList);
  res.render("tasks", {
    name: "@outside",
    urlName: "outside",
    description: "tasks to be done outside",
    tasks: tasksList,
    counter: number
  });
});

module.exports = router;
