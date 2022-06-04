const mongoose = require("mongoose");
const product = mongoose.model(
    "products",
    new mongoose.Schema({
        name: String,
        description: String,
        type: String,
        categories: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "categories"
        }],
        business: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "business"
        },
        notes: String,
        isDeleted: {
         type: Boolean, 
         default: false }
    },
{ timestamps: true }
    )
    
);

module.exports = product;
