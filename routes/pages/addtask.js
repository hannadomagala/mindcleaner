var express = require("express");
var router = express.Router();
const Thought = require("../../models/thought");

/* GET addtask */
router.get("/", function(req, res, next) {
  res.render("addtask", {
    name: "Add task",
    urlName: "addtask",
    input: "",
    thoughtId: ""
  });
});

router.get("/:id", async (req, res) => {
  const thought = await Thought.findOne({ _id: req.params.id });

  res.render("addtask", {
    name: "Add task",
    urlName: "addtask",
    input: thought.title,
    thoughtId: thought._id
  });
});

module.exports = router;
