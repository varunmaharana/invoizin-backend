class ApiResponse {
    statusCode: number;
    payload: any;
    message: string;
    success: boolean;

    constructor(statusCode: number, payload: any, message: string = "Success") {
        this.statusCode = statusCode;
        this.payload = payload;
        this.message = message;
        this.success = statusCode < 400;
    }
}

export { ApiResponse };