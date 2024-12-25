const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_master",
  },
});

module.exports = mongoose.model("organization", organizationSchema);
