const express = require("express");
const router = express.Router();
const Thought = require("../../models/thought");

/* GET inbox */

router.get("/", async function(req, res) {
  const number = await Thought.count();
  const thoughtsList = await Thought.find();

  res.render("inbox", {
    name: "Inbox",
    urlName: "inbox",
    description: "thoughts to analyze",
    thoughts: thoughtsList,
    counter: number
  });
});

module.exports = router;
