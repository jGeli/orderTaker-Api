const mongoose = require("mongoose");
const order_item = mongoose.model(
<<<<<<< HEAD
    "Order_item",
=======
    "Order_items",
>>>>>>> fcf88fd7352b3613e9f55b28e05af66c16f5bacb
    new mongoose.Schema({
        inventory_id: String,
        qty: String,
        price: String,
        subtotal: String,
        notes: String,
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
        { timestamps: true }
    )
    
);
module.exports = order_item;