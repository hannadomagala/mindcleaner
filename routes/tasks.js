const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Task = require("../models/task");
const Thought = require("../models/thought");

router.post("/", async (req, res) => {
  const task = new Task({
    title: req.body.title,
    date: req.body.date,
    someday: req.body.someday,
    details: req.body.details,
    contexts: req.body.contexts,
    waiting: req.body.waiting,
    delegated: req.body.delegated,
    done: req.body.done,
    thoughtId: req.body.thoughtId
  });
  console.log(task.details);
  await task.save();
  Thought.findOneAndDelete({ _id: task.thoughtId })
    .then(() => res.send(task))
    .catch(err => res.send(task));
});

router.delete("/:id", async (req, res) => {
  const task = await Task.findByIdAndRemove(req.params.id);

  if (!task)
    return res.status(404).send("The task with the given ID was not found.");

  res.send("Item deleted");
});

router.put("/:id", async (req, res) => {
  const task = await Task.findOne({
    _id: req.params.id
  });

  if (!task)
    return res.status(404).send("The task with the given ID was not found.");

  if (req.body.title) {
    task.title = req.body.title;
  }
  if (req.body.someday) {
    task.someday = true;
    task.date = null;
  }
  if (!req.body.someday) {
    task.someday = false;
    task.date = req.body.date;
  }
  if (req.body.details) {
    task.details = req.body.details;
  }
  if (req.body.contexts) {
    task.contexts = req.body.contexts;
  }
  if (req.body.waiting) {
    task.waiting = req.body.waiting;
  }
  if (req.body.delegated) {
    task.delegated = req.body.delegated;
  }
  if (!req.body.delegated) {
    task.delegated = null;
    task.waiting = false;
  }
  if (req.body.done) {
    task.done = req.body.done;
  }
  task
    .save()
    .then(() => {
      res.send("Item updated");
    })
    .catch(err => console.log(err));
});

//get methods in pages

module.exports = router;
