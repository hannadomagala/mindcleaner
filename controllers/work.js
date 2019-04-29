const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Task = require("../models/task");

/* GET work-contexts */
router.get("/", auth, async (req, res) => {
  const user = req.user;

  const tasksList = await Task.find({
    contexts: { name: "work", class: "c-work" },
    userId: user._id
  });

  const number = tasksList.length;

  console.log(tasksList);
  res.render("tasks", {
    name: "@work",
    urlName: "work",
    description: "tasks to be done at work",
    tasks: tasksList,
    counter: number,
    user: user.name
  });
});

module.exports = router;
