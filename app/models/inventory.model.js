const mongoose = require("mongoose");
const inventory = mongoose.model(
    "inventories",
    new mongoose.Schema({
        
   products: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "products"
   },
   purchases: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: "purchases"
   }],
   price: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "pricings"
   },
   description: String,
   inStocks: String,
   notes: String
    },      
        { timestamps: true }
    )
);
module.exports = inventory;