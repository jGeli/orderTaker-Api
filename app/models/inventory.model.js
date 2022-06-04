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
          products: 
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products"
            },
          pricings: 
              {
            type: mongoose.Schema.Types.Array,
            ref: "pricings"
            }
    },      
        { timestamps: true }
    )
);
module.exports = inventory;