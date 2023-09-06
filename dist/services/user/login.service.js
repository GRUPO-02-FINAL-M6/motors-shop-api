"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const login = (userId) => {
    const token = (0, jsonwebtoken_1.sign)({}, String(process.env.SECRET_KEY), {
        expiresIn: "24h",
        subject: String(userId),
    });
    const tokenObject = {
        token: token,
    };
    return tokenObject;
};
exports.default = login;
