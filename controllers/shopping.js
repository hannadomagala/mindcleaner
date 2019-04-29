const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Task = require("../models/task");

/* GET shopping-contexts */
router.get("/", auth, async (req, res) => {
  const user = req.user;

  const tasksList = await Task.find({
    contexts: { name: "shopping", class: "c-shopping" },
    userId: user._id
  });

  const number = tasksList.length;

  console.log(tasksList);
  res.render("tasks", {
    name: "@shopping",
    urlName: "shopping",
    description: "things to buy",
    tasks: tasksList,
    counter: number,
    user: user.name
  });
});

module.exports = router;
