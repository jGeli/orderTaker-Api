const mongoose = require("mongoose");
const role = mongoose.model(
  "roles",
  new mongoose.Schema({
    title: String,
    notes: String,
    isDeleted: {
      type: Boolean,
      default: false
    }

  },
    { timestamps: true }
  )

);
module.exports = role;