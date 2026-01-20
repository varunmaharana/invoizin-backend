import mongoose, { Schema } from "mongoose";

import { IContact } from "../types/contact.type";

const contactSchema = new Schema<IContact>({
    type: {
        type: String,
        enum: ["buyer", "seller", "both"],
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    phone: {
        type: String,
        trim: true,
        maxlength: 10,
        minlength: 10,
        unique: true,
        
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zip: {
        type: String,
    },
    country: {
        type: String,
    },
    website: {
        type: String,
    },
    logo: {
        type: String,
    },
}, { timestamps: true });

const Contact = mongoose.model<IContact>("Contact", contactSchema);

export default Contact;