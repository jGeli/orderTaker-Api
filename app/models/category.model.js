const mongoose = require("mongoose");
const category = mongoose.model(
    "Categories",
    new mongoose.Schema({
        name: String,
        description: String,
        notes: String,
        isDeleted: {
            type: Boolean,
            default: false
        }
    },{ timestamps: true }),

);
module.exports = category;