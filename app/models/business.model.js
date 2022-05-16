const mongoose = require("mongoose");
const Business = mongoose.model(
  "Business",
  new mongoose.Schema({
    name: String,
    address: String,
    contact: String,
    email_address: String,
    type: String,
    notes: String,  
    isVerified: { type: Boolean, default: false },
    isBan: { type: Boolean, default: false },
    isViewed: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    timestamps: { type: String, default: new Date },
    inventories: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Inventories"
            }
    ]
  })
);
module.exports = Business;