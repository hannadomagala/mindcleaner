var express = require("express");
var router = express.Router();
const auth = require("../middlewares/auth");
const Thought = require("../models/thought");

/* GET addtask */
router.get("/", auth, async (req, res) => {
  const user = req.user;

  res.render("addtask", {
    name: "Add task",
    urlName: "addtask",
    input: "",
    thoughtId: "",
    user: user.name,
    userId: user._id
  });
});

router.get("/:id", auth, async (req, res) => {
  const user = req.user;
  const thought = await Thought.findOne({ _id: req.params.id });

  res.render("addtask", {
    name: "Add task",
    urlName: "addtask",
    input: thought.title,
    thoughtId: thought._id,
    user: user.name,
    userId: user._id
  });
});

module.exports = router;
