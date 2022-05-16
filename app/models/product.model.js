const mongoose = require("mongoose");
<<<<<<< HEAD
const product = mongoose.model(
    "Product",
=======
const products = mongoose.model(
    "Products",
>>>>>>> fcf88fd7352b3613e9f55b28e05af66c16f5bacb
    new mongoose.Schema({
        name: String,
        description: String,
        type: String,
        categories: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Categories"
<<<<<<< HEAD
        }],
=======
        },
>>>>>>> fcf88fd7352b3613e9f55b28e05af66c16f5bacb
        notes: String,
        isDeleted: {
         type: Boolean, 
         default: false }
    },
{ timestamps: true }
    )
    
);

module.exports = products;
