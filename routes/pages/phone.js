const express = require("express");
const router = express.Router();
const Task = require("../../models/task");

/* GET phone */
router.get("/", async (req, res) => {
  const tasksList = await Task.find({
    contexts: { name: "phone", class: "c-phone" }
  });

  const number = tasksList.length;

  console.log(tasksList);
  res.render("tasks", {
    name: "@phone",
    urlName: "phone",
    description: "tasks to be done at phone",
    tasks: tasksList,
    counter: number
  });
});

module.exports = router;
