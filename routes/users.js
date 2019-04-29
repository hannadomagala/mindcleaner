const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const { User, validate } = require("../models/user");

// create new users
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res.status(400).send({
      err: error.details[0].message
    });

  let user = await User.findOne({ nick: req.body.nick });
  if (user)
    return res.status(400).send({
      err: "User with this nickname is already registered."
    });

  user = new User(_.pick(req.body, ["name", "nick", "password"]));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const token = jwt.sign({ _id: user._id }, config.get("jwtPrivateKey"));

  res.header("x-auth-token", token).send({
    user: _.pick(user, ["_id", "name", "nick"]),
    message: "User created! You can now log in."
  });
});

module.exports = router;
