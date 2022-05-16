const mongoose = require("mongoose");
const role = mongoose.model(
  "Role",
  new mongoose.Schema({
    title: String,
    notes: String,
    isDeleted: { 
      type: Boolean, 
      default: false }
  })
);
module.exports = role;