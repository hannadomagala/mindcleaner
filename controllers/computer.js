const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Task = require("../models/task");

/* GET computer-contexts */
router.get("/", auth, async (req, res) => {
  const user = req.user;

  const tasksList = await Task.find({
    contexts: { name: "computer", class: "c-computer" },
    userId: user._id
  });

  const number = tasksList.length;

  console.log(tasksList);
  res.render("tasks", {
    name: "@computer",
    urlName: "computer",
    description: "tasks to be done on computer",
    tasks: tasksList,
    counter: number,
    user: user.name
  });
});

module.exports = router;
