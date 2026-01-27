import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

import { IUser } from "../types/user.type";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    phone: {
        type: String,
        trim: true,
        maxlength: 10,
        minlength: 10,
        unique: true,
        sparse: true, // Allows multiple null values
    },
    refreshToken: {
        type: String,
    },
}, { timestamps: true });

userSchema.pre("save", async function (next: mongoose.CallbackWithoutResultAndOptionalError) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, parseInt(process.env.BCRYPT_SALT_ROUNDS || "10"));
    next();
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;

