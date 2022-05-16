const mongoose = require("mongoose");
const Notication = mongoose.model(
  "Notication",
  new mongoose.Schema({
    title: String,
    content: String,
    type: String,
    status: String,
    notes: String,
    isViewed: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    timestamps: { type: String, default: new Date }
  })
);
module.exports = Notication;