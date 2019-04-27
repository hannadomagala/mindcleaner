const express = require("express");
const router = express.Router();
const Task = require("../../models/task");

/* GET home */
router.get("/", async (req, res) => {
  const tasksList = await Task.find({
    contexts: { name: "home", class: "c-home" }
  });

  const number = tasksList.length;

  console.log(tasksList);
  res.render("tasks", {
    name: "@home",
    urlName: "home",
    description: "tasks to be done at home",
    tasks: tasksList,
    counter: number
  });
});

module.exports = router;
