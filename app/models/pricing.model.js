const mongoose = require("mongoose");
const pricing = mongoose.model(
    "pricings",
    new mongoose.Schema({
        name: String,
        description: String,
        price: String,
        notes: String,
        isDeleted: {
            type: Boolean,
            default: false
        },
      
    },
        { timestamps: true }
    )
);


module.exports = pricing;