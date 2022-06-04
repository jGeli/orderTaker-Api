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
        business: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "business"
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