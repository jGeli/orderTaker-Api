const mongoose = require("mongoose");
const products = mongoose.model(
    "Products",
    new mongoose.Schema({
        name: String,
        description: String,
        type: String,
        categories: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Categories"
        },
        notes: String,
        isDeleted: {
         type: Boolean, 
         default: false }
    },
{ timestamps: true }
    )
    
);

module.exports = products;
