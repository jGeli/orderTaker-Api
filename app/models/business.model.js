const mongoose = require("mongoose");
const business = mongoose.model(
    "business",
    new mongoose.Schema({
        name: String,
        about: String,
        address: String,
        contact: String,
        email_address: String,
        type: String,
        isVerified: {
            type: Boolean,
            default: false
        },
        isBan: {
            type: Boolean,
            default: false
        },
        notes: String,
        isDeleted: {
            type: Boolean,
            default: false
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
        logo: String
    }
        )    
);
module.exports = business;
