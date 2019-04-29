const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Thought = require("../models/thought");

/* GET inbox */

router.get("/", auth, async (req, res) => {
  const user = req.user;

  const thoughtsList = await Thought.find({
    userId: user._id
  });

  const number = thoughtsList.length;

  res.render("inbox", {
    name: "Inbox",
    urlName: "inbox",
    description: "thoughts to analyze",
    thoughts: thoughtsList,
    counter: number,
    user: user.name,
    userId: user._id
  });
});

module.exports = router;
