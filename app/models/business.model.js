const mongoose = require("mongoose");
const business = mongoose.model(
    "businesses",
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
        purchases: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "purchases"
            }
            ],
<<<<<<< HEAD
         inventory: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "inventories"
            }
            ],
        orders: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "orders"
            },
            ],
=======
        // user: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "users"
        // }
        //  inventory: [
        // {
        //   type: mongoose.Schema.Types.ObjectId,
        //   ref: "inventories"
        // }
        //  ],
        // orders: [
        // {
        //  type: mongoose.Schema.Types.ObjectId,
        //  ref: "orders"
        // },
        //  ],
>>>>>>> 71e863dc7d4fefc0b30ce2fa638674661cee2c04
  
        payments: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "payments"
            }
            ], 
        customers: [
            {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "customers"
            }
            ],       
    },
        { timestamps: true }
    )    
);
module.exports = business;
