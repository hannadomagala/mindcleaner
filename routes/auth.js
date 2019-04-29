const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const { User } = require("../models/user");
const app = require("../app");

// authentication
router.post("/", async (req, res) => {
  console.log(req.body);
  const { error } = validate(req.body);
  if (error)
    return res.status(400).send({
      err: "Invalid nickname or password."
    });

  let user = await User.findOne({ nick: req.body.nick });

  if (!user)
    return res.status(400).send({
      err: "Invalid nickname or password."
    });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send({
      err: "Invalid nickname or password."
    });

  const token = jwt.sign(
    { _id: user._id, name: user.name },
    config.get("jwtPrivateKey")
  );

  res.cookie("jwttoken", token).send({
    message: "Cookie added!"
  });
});

router.delete("/", async (req, res) => {
  res.clearCookie("jwttoken").send({
    message: "Cookie cleared!"
  });
});

function validate(req) {
  const schema = {
    nick: Joi.string()
      .min(5)
      .max(15)
      .required(),
    password: Joi.string()
      .min(5)
      .max(255)
  };

  return Joi.validate(req, schema);
}

module.exports = router;
