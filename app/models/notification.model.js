const mongoose = require("mongoose");
<<<<<<< HEAD
const Notification = mongoose.model(
  "Notification",
  new mongoose.Schema({
    title: String,
    content: String,
    type: String,
    status: String,
    notes: String,
    isViewed: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    timestamps: { type: String, default: new Date }
  })
=======
const notification = mongoose.model(
    "Notification",
    new mongoose.Schema({
        title: String,
        content: String,
        type: String,
        status: String,
        notes: String,
        isViewed: {
            type: Boolean,
            default: false
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
    },
    { timestamps: true },
    )
    
>>>>>>> fcf88fd7352b3613e9f55b28e05af66c16f5bacb
);
module.exports = Notification;
