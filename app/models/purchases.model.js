const mongoose = require("mongoose");
const purchases = mongoose.model(
    "Purchases",
    new mongoose.Schema({
        poduct_id: String,
        qty: String,
        price: String,
        total: String,
        type: String,
        purchaseBy: String,
        notes: String,
        isDeleted: {
            type: Boolean,
            default: false
        }

    }),
    { timestamps: true },
);
module.exports = purchases;