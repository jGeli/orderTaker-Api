const mongoose = require("mongoose");
const User = mongoose.model(
  "users",
  new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthDate: String,
    age: String,
    gender: String,
    contact: String,
    address: String,
    email_address: {
      type: String,
      unique: true
    },  
    username: {
      type: String,
      unique: true
    },
    password: String,
    dpUrl: String,
    notes: String,
    isDeleted: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    isBlock: { type: Boolean, default: false },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "roles"
      }
    ],
    notifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "notifcations"
      }
    ],
    business:
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "business"
      }
  },
    { timestamps: true }
  )
  
);
module.exports = User;
