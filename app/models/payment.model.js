const mongoose = require("mongoose");
const payment = mongoose.model(
    "Payment",
    new mongoose.Schema({
        order_id: String,
        customer_id: String,
        description: String,
        amount: String,
        type: String,
        receivedBy: String,
        notes: String,
        isDeleted: {
            type: Boolean,
            default: false
        }
    }),
    { timestamps: true },
);
module.exports = payment;