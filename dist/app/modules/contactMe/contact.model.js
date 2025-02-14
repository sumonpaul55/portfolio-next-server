"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define the schema
const contactSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true, // Removes leading and trailing whitespace
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
        trim: true, // Removes leading and trailing whitespace
    },
    phone: {
        type: String,
        required: true,
        trim: true, // Removes leading and trailing whitespace
    },
}, { timestamps: true } // Adds createdAt and updatedAt fields
);
// Create the model
const Contact = (0, mongoose_1.model)("Contact", contactSchema);
exports.default = Contact;
