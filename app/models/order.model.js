const mongoose = require("mongoose");
const order = mongoose.model(
    "orders",
    new mongoose.Schema({
        description: String,
        order_no: String,
        order_item: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "order_Items"
        }],
        total_ammount: String,
        isPaid: {
            type: Boolean,
            default:false
        },
        isCompleted: {
            type: Boolean,
            default: false
        },
        recordedBy: String,
        notes: String,
        isDeleted: {
            type: Boolean,
            default: false
        },
        customer_id: String
    },
    { timestamps: true }
    )
    
);
module.exports = order;