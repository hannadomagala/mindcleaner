const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Thought = require('../models/thought');

router.post("/", async (req, res) => {
    const thought = new Thought({
        title: req.body.thought
    });

    const result = await thought.save()
    res.send(thought);
});

router.delete('/:id', async (req, res) => {
    const thought = await Thought.findByIdAndRemove(req.params.id);
  
    if (!thought) return res.status(404).send('The thought with the given ID was not found.');

    res.send('Item deleted');
  });

//get method in pages/inbox

module.exports = router;