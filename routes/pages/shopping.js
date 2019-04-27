const express = require("express");
const router = express.Router();
const Task = require("../../models/task");

/* GET shopping */
router.get("/", async (req, res) => {
  const tasksList = await Task.find({
    contexts: { name: "shopping", class: "c-shopping" }
  });

  const number = tasksList.length;

  console.log(tasksList);
  res.render("tasks", {
    name: "@shopping",
    urlName: "shopping",
    description: "things to buy",
    tasks: tasksList,
    counter: number
  });
});

module.exports = router;
