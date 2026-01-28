import { Request, Response, NextFunction } from "express";
import { ZodObject, ZodError } from "zod";
import { ApiError } from "../lib/utils/ApiError";
import { asyncHandler } from "../lib/utils/asyncHandler";

export const validate = (schema: ZodObject) =>
	asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
		try {
            const result = schema.safeParse(req.body);

            if (result.success) {
                next();
            } else {

            }

            
		} catch (error) {
			// throw new ApiError(400, "Validation error", error);
		}
	});
