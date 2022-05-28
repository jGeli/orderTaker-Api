const mongoose = require("mongoose");
const order_item = mongoose.model(
    "order_items",
    new mongoose.Schema({
        inventory_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "inventories"
        },
        qty: String,
        price: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'pricings'
        },
        subtotal: String,
        type: String,
        notes: String,
        isDeleted: {
            type: Boolean,
            default: false
        },
        price: [
            {
                
                type: mongoose.Schema.Types.ObjectId,
                ref: "pricing",
                type: Number
            }]



    },
        { timestamps: true }
    )

);
module.exports = order_item;