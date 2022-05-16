const mongoose = require("mongoose");
const User = mongoose.model(
  "users",
  new mongoose.Schema({
    username: String,
    email_address: String,
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
    business: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "businesses"
      }
     ]
  },
    { timestamps: true }
  )
  
);
module.exports = User;
