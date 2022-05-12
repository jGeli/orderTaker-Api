const mongoose = require("mongoose");
const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    title: String,
    notes: String,
    isDeleted: { type: Boolean, default: false }
  })
);
module.exports = Role;