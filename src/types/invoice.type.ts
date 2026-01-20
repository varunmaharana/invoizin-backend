import { ObjectId } from "mongoose";
import { ICompany } from "./company.type";
import { IContact } from "./contact.type";
import { IInvoiceProduct, IProduct } from "./product.type";

export interface IInvoice {
    supplier: ObjectId;
    number: string;
    company: ObjectId;
    contact: ObjectId;
    products: IInvoiceProduct[];
    totalAmount: number;
    status: "draft" | "sent" | "paid" | "overdue";
    buyer: string;
    createdAt?: Date;
    updatedAt?: Date;
}