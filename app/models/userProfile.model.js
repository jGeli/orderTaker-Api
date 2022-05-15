const mongoose = require("mongoose");
const UserProfile = mongoose.model(
  "userProfile",
  new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthDate: String,
    age: Number,
    gender: String,
    address: String,
    contact: String,
    notes: String,
    isDeleted: { type: Boolean, default: false }
  })
);
module.exports = UserProfile;