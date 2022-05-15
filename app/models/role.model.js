const mongoose = require("mongoose");
const role = mongoose.model(
  "role",
  new mongoose.Schema({
    title: String,
    notes: String,
    isDeleted: { 
      type: Boolean, 
      default: false }
  })
);
module.exports = role;