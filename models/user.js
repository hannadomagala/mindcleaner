const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  nick: {
    type: String,
    unique: true,
    required: true,
    minlength: 5,
    maxlength: 15
  },
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  }
});

function validateUser(user) {
  const schema = {
    nick: Joi.string()
      .min(5)
      .max(15)
      .required(),
    name: Joi.string()
      .min(3)
      .max(15)
      .required(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };

  return Joi.validate(user, schema);
}

const User = mongoose.model("User", userSchema);

exports.User = User;
exports.validate = validateUser;
