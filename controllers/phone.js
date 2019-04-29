const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Task = require("../models/task");

/* GET phone-contexts */
router.get("/", auth, async (req, res) => {
  const user = req.user;

  const tasksList = await Task.find({
    contexts: { name: "phone", class: "c-phone" },
    userId: user._id
  });

  const number = tasksList.length;

  console.log(tasksList);
  res.render("tasks", {
    name: "@phone",
    urlName: "phone",
    description: "tasks to be done at phone",
    tasks: tasksList,
    counter: number,
    user: user.name
  });
});

module.exports = router;
