const mongoose = require("mongoose");
const payment = mongoose.model(
    "payments",
    new mongoose.Schema({
        order_id: String,
        customer_id: String,
        description: String,
        amount: String,
        type: String,
        receivedBy: String,
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
module.exports = payment;