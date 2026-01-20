import mongoose, { Schema } from "mongoose";

import { IProduct } from "../types/product.type";

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
    },
}, { timestamps: true });

const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product;