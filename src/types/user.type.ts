export interface IUser {
    name: string;
    email: string;
    password: string;
    phone?: string;
    refreshToken?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

