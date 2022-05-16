const mongoose = require("mongoose");
const User = mongoose.model(
  "User",
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
        ref: "Roles"
      }
    ],
    userProfile: [
       {
          type: mongoose.Schema.Types.ObjectId,
          ref: "UserProfile"
       }
     ],
    business: [
      {
         type: mongoose.Schema.Types.ObjectId,         ref: "Business"
      }
     ],
    notofications: [
      {
        type: mongoose.Schema.Types.ObjectId, ref: "Notifications"
      }
    ]
  },
    { timestamps: true }
  )
  
);
module.exports = User;