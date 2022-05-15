const mongoose = require("mongoose");
const business = mongoose.model(
    "business",
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
          ref: "inventory"
        }
         ],
        orders: [
        {
         type: mongoose.Schema.Types.ObjectId,
         ref: "order"
        },
         ],
        purchases: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "purchases"
            }
        ],
        payments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "payment"
            }
        ], 
        customers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "customer"
            }
        ],
        
      

    })
   
);
module.exports = business;