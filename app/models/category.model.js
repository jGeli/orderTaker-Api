const mongoose = require("mongoose");
const category = mongoose.model(
    "categories",
    new mongoose.Schema({
        name: String,
        description: String,
        notes: String,
        business: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "business"
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
        { timestamps: true }
    )  
);
module.exports = category;