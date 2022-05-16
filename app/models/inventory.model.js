const mongoose = require("mongoose");
const inventory = mongoose.model(
    "Inventories",
    new mongoose.Schema({
        product_id: String,
        purchases: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Purchases"
        },
        description: String,
        inStocks: String,
        price: String,
        notes: String,
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
        { timestamps: true }
    )
    
);
module.exports = inventory;