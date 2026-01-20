import { ObjectId } from "mongoose";

export interface IProduct {
    name: string;
    description?: string;
    price: number;
    quantity: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IInvoiceProduct {
    product: ObjectId;
    quantity: number;
    price: number;
    total: number;
    createdAt?: Date;
    updatedAt?: Date;
}