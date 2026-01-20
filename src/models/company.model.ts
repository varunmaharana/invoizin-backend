import mongoose, { Schema } from "mongoose";

import { ICompany } from "../types/company.type";

const companySchema = new Schema<ICompany>({
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

const Company = mongoose.model<ICompany>("Company", companySchema);

export default Company;