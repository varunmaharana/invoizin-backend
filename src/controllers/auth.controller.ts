import { Request, Response } from "express";
import { BadRequestError } from "../lib/utils/CustomError";
import { asyncHandler } from "../lib/utils/asyncHandler";
import { ApiResponse } from "../lib/utils/ApiResponse";

export const register = asyncHandler(async (req: Request, res: Response) => {});
