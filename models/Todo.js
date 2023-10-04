const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    maxLength: 50,
  },
  desc: {
    type: String,
    maxLength: 50,
  },
  // email: {
  //   type: String,
  //   maxLength: 50,
  // },
  // password: {
  //   type: String,
  //   maxLength: 50,
  // },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo", todoSchema);
