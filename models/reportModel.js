const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "project",
  },
  hoursSpent: {
    type: Number,
  },
  tasksGenerated: {
    type: Number,
  },
  tasksCompleted: {
    type: Number,
  },
  peopleAssigned: {
    type: Number,
  },
});

module.exports = mongoose.model("report", reportSchema);
