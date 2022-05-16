const mongoose = require("mongoose");
const order = mongoose.model(
    "orders",
    new mongoose.Schema({
        description: String,
        order_no: String,
        total_amount: String,
        recordedBy: String,
        notes: String,
        customer_id: String,
        order_item: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "order_item"
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
        }
     

    })
);
module.exports = order;