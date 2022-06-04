const mongoose = require("mongoose");
const purchase = mongoose.model(
    "purchases",
    new mongoose.Schema({
        qty: String,
        price: String,
        total: String,
        type: String,
        purchaseBy: String,
        notes: String,
        business: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "business"
        },
        isDeleted: {
            type: Boolean,
            default: false
        },       
        products: {
            type: mongoose.Schema.Types.ObjectId,
                ref: "products"
        },
    },
        { timestamps: true }
    )
);
module.exports = purchase;