const mongoose = require("mongoose");
const order_item = mongoose.model(
    "Order_items",
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