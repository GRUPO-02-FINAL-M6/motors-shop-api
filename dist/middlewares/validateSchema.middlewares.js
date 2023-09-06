"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateSchema = (schema) => (req, res, next) => {
    const toValidate = req.body;
    const validated = schema.parse(toValidate);
    req.body = validated;
    next();
};
exports.default = validateSchema;
