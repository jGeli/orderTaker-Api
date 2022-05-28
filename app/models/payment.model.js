const mongoose = require("mongoose");
const payment = mongoose.model(
    "payments",
    new mongoose.Schema({
        order_id: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "orders"
            }],
        customer_id: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "customers"
        }],
        business_id: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "businesses"
        }], 
        description: String,
        amount: String,
        type: String,
        receivedBy: String,
        notes: String,
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
    )
    
);
module.exports = payment;