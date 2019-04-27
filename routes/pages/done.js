const express = require("express");
const router = express.Router();
const Task = require("../../models/task");

/* GET donek */
router.get("/", async (req, res) => {
  const tasksList = await Task.find({
    done: true
  });

  const number = tasksList.length;

  res.render("done", {
    name: "Done",
    urlName: "done",
    description: "tasks done",
    counter: number,
    tasks: tasksList
  });
});

module.exports = router;
