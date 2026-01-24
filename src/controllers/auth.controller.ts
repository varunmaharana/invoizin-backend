import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
    const { name, email, password, phone } = req.body;

    // If company already exists, return 400

    // Else create company

    // Return company
}