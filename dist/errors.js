"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.AppError = void 0;
const zod_1 = require("zod");
class AppError extends Error {
    constructor(message, statusCode) {
        super(message), (this.statusCode = statusCode);
    }
}
exports.AppError = AppError;
const handleError = (err, req, res, next) => {
    if (err instanceof AppError) {
        const errorMessage = { message: err.message };
        return res.status(err.statusCode).json(errorMessage);
    }
    if (err instanceof zod_1.ZodError) {
        const errorMessage = { message: err.flatten().fieldErrors };
        return res.status(400).json(errorMessage);
    }
    console.log(err);
    const errorMessage = { message: "Internal Server Error" };
    return res.status(500).json(errorMessage);
};
exports.handleError = handleError;
