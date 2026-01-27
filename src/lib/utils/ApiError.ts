class ApiError extends Error {
    statusCode: number;
    payload: any;
    message: string;
    success: boolean;
    errors: any[];

    constructor(
        statusCode: number,
        message: string = "Something went wrong!",
        errors: any[] = [],
        payload: any = null,
        stack: string = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.payload = payload;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };