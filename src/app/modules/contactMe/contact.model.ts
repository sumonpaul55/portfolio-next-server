import { Schema, model } from "mongoose";
import { TContactData } from "./contact.interface";

// Define the schema
const contactSchema = new Schema<TContactData>(
  {
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
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

// Create the model
const Contact = model("Contact", contactSchema)

export default Contact;
