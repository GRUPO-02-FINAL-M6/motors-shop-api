"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const errors_1 = require("../errors");
const verifyToken = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization)
        return res.status(401).json({ message: "Missing bearer token" });
    const [_bearer, token] = authorization.split(" ");
    (0, jsonwebtoken_1.verify)(token, String(process.env.SECRET_KEY), (err, decode) => {
        if (err)
            throw new errors_1.AppError("invalid token", 401);
        const userId = decode.sub;
        res.locals.userId = userId;
    });
    return next();
};
exports.default = verifyToken;
