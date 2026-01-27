import { Types } from "mongoose";

export interface ICompany {
    name: string;
    email: string;
    password: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    website?: string;
    logo?: string;
    owner: Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}