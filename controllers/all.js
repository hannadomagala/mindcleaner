const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Task = require("../models/task");

/* GET all */
router.get("/", auth, async (req, res) => {
  const user = req.user;

  const tasksList = await Task.find({
    done: false,
    userId: user._id
  });
  const number = tasksList.length;

  res.render("tasks", {
    name: "All tasks",
    urlName: "all",
    description: "tasks to be done",
    tasks: tasksList,
    counter: number,
    user: user.name,
    userId: user._id
  });
});

module.exports = router;
