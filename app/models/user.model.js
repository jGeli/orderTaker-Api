const mongoose = require("mongoose");
const user = mongoose.model(
  "user",
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
        ref: "Role"
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
        type: mongoose.Schema.Types.ObjectId, ref: "notification"
      }
    ]
  }),
  { timestamps: true },
);
module.exports = user;