const mongoose = require("mongoose");
const Notification = mongoose.model(
    "notifications",
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
    
);
module.exports = Notification;
