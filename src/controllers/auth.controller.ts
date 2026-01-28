import { Request, Response } from "express";
import { BadRequestError } from "../lib/utils/CustomError";
import { asyncHandler } from "../lib/utils/asyncHandler";
import { ApiResponse } from "../lib/utils/ApiResponse";

export const register = asyncHandler(async (req: Request, res: Response) => {
	// const { name, email, password, phone } = req.body;

	// res.status(201).json(
	// 	new ApiResponse(
	// 		200,
	// 		{
	// 			user: {
	// 				name: "John Doe",
	// 				email: "john.doe@example.com",
	// 				phone: "1234567890",
	// 			},
	// 		},
	// 		"User registered successfully",
	// 	),
	// );
	throw new BadRequestError("Invalid Data Provided");
});
