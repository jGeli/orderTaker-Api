const mongoose = require("mongoose");
const business = mongoose.model(
    "Business",
    new mongoose.Schema({
        name: String,
        address: String,
        contact: String,
        email_address: String,
        type: String,
        isVerified: {
            type: Boolean,
            default: false
        },
        isBan: {
            type: Boolean,
            default: false
        },
        notes: String,
        isDeleted: {
            type: Boolean,
            default: false
        },
         inventory: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Inventories"
        }
         ],
        orders: [
        {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Orders"
        },
         ],
        purchases: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Purchases"
        }
        ],
        payments: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payments"
        }
        ], 
        customers: [
        {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Customer"
        }
        ],       
    }
        )    
);
module.exports = business;