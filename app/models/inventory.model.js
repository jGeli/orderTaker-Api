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
        business: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "business"
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
          product: 
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product"
            },
          price: [
              {
            type: mongoose.Schema.Types.Array,
            ref: "pricing"
            }]
    },      
        { timestamps: true }
    )
);
module.exports = inventory;