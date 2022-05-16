const mongoose = require("mongoose");
const product = mongoose.model(
    "Product",
    new mongoose.Schema({
        name: String,
        description: String,
        type: String,
        categories: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Categories"
        }],
        notes: String,
        isDeleted: {
         type: Boolean, 
         default: false }
    }),
    { timestamps: true },
);

module.exports = product;
