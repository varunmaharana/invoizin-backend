import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

import { ICompany } from "../types/company.type";
import { NextFunction } from "express";

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
    password: {
        type: String,
        required: true,
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

companySchema.pre("save", async function (next: mongoose.CallbackWithoutResultAndOptionalError) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, parseInt(process.env.BCRYPT_SALT_ROUNDS));
    next();
});

const Company = mongoose.model<ICompany>("Company", companySchema);

export default Company;