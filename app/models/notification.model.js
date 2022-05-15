const mongoose = require("mongoose");
const notification = mongoose.model(
    "notification",
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
        }
    }),
    { timestamps: true },
);
module.exports = notification;