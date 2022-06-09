const mongoose = require("mongoose");
const User = mongoose.model(
  "users",
  new mongoose.Schema({
    firstName: { type: 'String' },
    lastName: { type: String },
    birthDate: String,
    age: String,
    gender: String,
    contact: String,
    address: String,
    email_address: { type: String }, 
    username: { type: String },
    password: { type: String },
    dpUrl: { type: String },
    notes: { type: String },
    isDeleted: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    isBlock: { type: Boolean, default: false },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "roles"
      }],
    notifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "notifications"
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


