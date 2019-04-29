const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Task = require("../models/task");

/* GET done */
router.get("/", auth, async (req, res) => {
  const user = req.user;

  const tasksList = await Task.find({
    done: true,
    userId: user._id
  });

  const number = tasksList.length;

  res.render("done", {
    name: "Done",
    urlName: "done",
    description: "tasks done",
    counter: number,
    tasks: tasksList,
    user: user.name
  });
});

module.exports = router;
