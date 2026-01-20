import { IInvoiceProduct } from './../types/product.type';
import mongoose, { Schema } from "mongoose";

import { IInvoice } from "../types/invoice.type";


const invoiceProductSchema = new Schema<IInvoiceProduct>({
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const invoiceSchema = new Schema<IInvoice>({
    number: {
        type: String,
        required: true,
    },
    supplier: {
        type: Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    },
    contact: {
        type: Schema.Types.ObjectId,
        ref: "Contact",
        required: true,
    },
    products: {
        type: [invoiceProductSchema],
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["draft", "sent", "paid", "overdue"],
        required: true,
    },
});

export default mongoose.model<IInvoice>("Invoice", invoiceSchema);
