const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
  title: String,
  date: { type: Date, default: Date.now },
  userId: String
});

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
