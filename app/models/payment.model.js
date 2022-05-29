const mongoose = require("mongoose");
const payment = mongoose.model(
    "payments",
    new mongoose.Schema({
        orders: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "orders"
            }],
        customers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "customers"
        }],
        businesses: [{
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