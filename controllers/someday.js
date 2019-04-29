const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Task = require("../models/task");

/* GET someday */
router.get("/", auth, async (req, res) => {
  const user = req.user;

  const tasksList = await Task.find({
    someday: true,
    done: false,
    userId: user._id
  });

  const number = tasksList.length;

  res.render("tasks", {
    name: "Someday",
    urlName: "someday",
    description: "tasks waiting to be planned",
    counter: number,
    tasks: tasksList,
    user: user.name
  });
});

module.exports = router;
