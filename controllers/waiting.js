var express = require("express");
var router = express.Router();
const auth = require("../middlewares/auth");
const Task = require("../models/task");

/* GET waiting */
router.get("/", auth, async (req, res) => {
  const user = req.user;

  const tasksList = await Task.find({
    waiting: true,
    done: false,
    userId: user._id
  });

  const number = tasksList.length;

  res.render("tasks", {
    name: "Waiting",
    urlName: "waiting",
    description: "tasks waiting to be done by someone",
    counter: number,
    tasks: tasksList,
    user: user.name
  });
});

module.exports = router;
