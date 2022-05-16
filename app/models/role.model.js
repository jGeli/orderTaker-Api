const mongoose = require("mongoose");
const role = mongoose.model(
  "Roles",
  new mongoose.Schema({
    title: String,
    notes: String,
    isDeleted: { 
      type: Boolean, 
      default: false }
  })
);
module.exports = role;