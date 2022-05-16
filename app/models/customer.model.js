const mongoose = require("mongoose");
const customer = mongoose.model(
    "customers",
    new mongoose.Schema({
        firstName: String,
        lastName: String,
        birthDate: String,
        age: String,
        gender: String,
        contact: String,
        address: String,
        notes: String,
        isDeleted: {
            type: Boolean,
            default: false
        }
    })
);
module.exports = customer;