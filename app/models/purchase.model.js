const mongoose = require("mongoose");
const purchase = mongoose.model(
    "purchases",
    new mongoose.Schema({
        poduct_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "products"
        },
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
    },
        { timestamps: true }
    )
);
module.exports = purchase;