const mongoose = require("mongoose");
const order_item = mongoose.model(
    "order_items",
    new mongoose.Schema({
        inventories: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "inventories"
        },
        pricings: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'pricings'
        },
        qty: String,
        subtotal: String,
        type: String,
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