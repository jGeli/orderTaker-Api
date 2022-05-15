const mongoose = require("mongoose");
const inventory = mongoose.model(
    "inventory",
    new mongoose.Schema({
        product_id: String,
        purchases: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "purchases"
        },
        description: String,
        inStocks: String,
        price: String,
        notes: String,
        isDeleted: {
            type: Boolean,
            default: false
        }
    }),
    { timestamps: true },
);
module.exports = inventory;