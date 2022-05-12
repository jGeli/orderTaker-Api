const mongoose = require("mongoose");
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email_address: String,
    password: String,
    isVerified: Boolean,
    isBlock: Boolean,
    dpUrl: String,
    notes: String,
    isDeleted: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ],
    // userProfile: [
    //     {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "UserProfile"
    //     }
    //   ],
    // business: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Business"
    //     }
    // ]
  })
);
module.exports = User;