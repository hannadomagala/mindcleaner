const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    title: String,
    date: { type: Date, default: Date.now }
})

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;