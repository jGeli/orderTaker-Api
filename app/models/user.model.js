const mongoose = require("mongoose");
<<<<<<< HEAD
const user = mongoose.model(
=======
const User = mongoose.model(
>>>>>>> fcf88fd7352b3613e9f55b28e05af66c16f5bacb
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
    notifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notifcation"
      }
    ],
    business: [
<<<<<<< HEAD
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Business"
        }
    ]
  })
);



module.exports = user;
=======
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
>>>>>>> fcf88fd7352b3613e9f55b28e05af66c16f5bacb
