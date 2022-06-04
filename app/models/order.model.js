const mongoose = require("mongoose");
const order = mongoose.model(
    "orders",
    new mongoose.Schema({
        description: String,
        order_no: String,
        total_amount: String,
        recordedBy: String,
        recordedBy: String,
        notes: String,
        customers: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "customers"
            },
        order_items: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "order_items"
            }
        ],
        isPaid: {
            type: Boolean,
            default: false
        },
        isCompleted: {
            type: Boolean,
            default: false
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
    

    },
        { timestamps: true }
    )
);
module.exports = order;