const mongoose = require("mongoose");
const inventory = mongoose.model(
    "inventories",
    new mongoose.Schema({
        
        purchases: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "purchases"
        }],
        description: String,
        inStocks: String,
        price: String,
        notes: String,
        isDeleted: {
            type: Boolean,
            default: false
        },
          product: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product"
            }]
    },
        { timestamps: true }
    )
);
module.exports = inventory;