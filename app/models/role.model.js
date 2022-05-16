const mongoose = require("mongoose");
const role = mongoose.model(
<<<<<<< HEAD
  "Role",
=======
  "Roles",
>>>>>>> fcf88fd7352b3613e9f55b28e05af66c16f5bacb
  new mongoose.Schema({
    title: String,
    notes: String,
    isDeleted: { 
      type: Boolean, 
      default: false }
  })
);
module.exports = role;