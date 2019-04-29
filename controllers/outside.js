const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Task = require("../models/task");

/* GET outside-contexts */
router.get("/", auth, async (req, res) => {
  const user = req.user;

  const tasksList = await Task.find({
    contexts: { name: "outside", class: "c-outside" },
    userId: user._id
  });

  const number = tasksList.length;

  console.log(tasksList);
  res.render("tasks", {
    name: "@outside",
    urlName: "outside",
    description: "tasks to be done outside",
    tasks: tasksList,
    counter: number,
    user: user.name
  });
});

module.exports = router;
