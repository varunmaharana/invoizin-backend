import { Request, Response, NextFunction } from "express";
import { ApiError, ErrorType } from "../lib/utils/ApiError";

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	_next: NextFunction,
) => {
	if (res.headersSent) {
		return _next(err);
	}

	if (err instanceof ApiError) {
		ApiError.handle(err, res);
		return;
	}

	res.status(500).json({
		type: ErrorType.INTERNAL,
		message: err.message || "Internal Server Error",
	});
};
