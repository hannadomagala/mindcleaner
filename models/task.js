const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  date: Date,
  someday: Boolean,
  details: String,
  contexts: Array,
  waiting: Boolean,
  delegated: String,
  done: Boolean,
  thoughtId: String,
  userId: String
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
