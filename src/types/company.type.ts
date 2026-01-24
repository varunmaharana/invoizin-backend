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
    createdAt?: Date;
    updatedAt?: Date;
}