const mongoose = require("mongoose");
const purchased = mongoose.model(
    "purchases",
    new mongoose.Schema({
        poduct_id: String,
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
        }
    },
        { timestamps: true }
    )
);
module.exports = purchased;