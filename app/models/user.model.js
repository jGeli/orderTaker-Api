const mongoose = require("mongoose");
const User = mongoose.model(
  "users",
  new mongoose.Schema({
    firstName: String,
    lastName:  String,
    birthDate: String,
    age: String,
    gender: String,
    contact: String,
    address: String,
    email_address:  String, 
    username:  String,
    password:  String,
    dpUrl:  String,
    notes:  String,
    status: {type: String, default: 'inactive'},
    isDeleted: { type: Boolean, default: false },
    isSuspended: { type: Boolean, default: false },
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
    business:    {
         type: mongoose.Schema.Types.ObjectId,
         ref: "business"
      }
  },
    { timestamps: true }
  )
);


module.exports = User;


