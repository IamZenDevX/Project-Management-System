const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_master",
  },
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "task",
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "organization",
  },
});

module.exports = mongoose.model("project", projectSchema);
