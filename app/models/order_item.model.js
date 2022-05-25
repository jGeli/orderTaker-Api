const mongoose = require("mongoose");
const order_item = mongoose.model(
    "order_items",
    new mongoose.Schema({
        inventory_id: String,
        qty: String,
        price: String,
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
                ref: "pricing"
            }]



    },
        { timestamps: true }
    )

);
module.exports = order_item;