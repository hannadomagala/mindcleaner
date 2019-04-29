const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Task = require("../models/task");

/* GET home-contexts */
router.get("/", auth, async (req, res) => {
  const user = req.user;

  const tasksList = await Task.find({
    contexts: { name: "home", class: "c-home" },
    userId: user._id
  });

  const number = tasksList.length;

  console.log(tasksList);
  res.render("tasks", {
    name: "@home",
    urlName: "home",
    description: "tasks to be done at home",
    tasks: tasksList,
    counter: number,
    user: user.name
  });
});

module.exports = router;
