"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePass = exports.sendChangePass = void 0;
const respositorys_1 = __importDefault(require("../utils/respositorys"));
const recoverySendEmail_service_1 = require("../services/recovery.services/recoverySendEmail.service");
const jsonwebtoken_1 = require("jsonwebtoken");
const errors_1 = require("../errors");
const patchProfile_service_1 = __importDefault(require("../services/user/patchProfile.service"));
const sendChangePass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const user = yield respositorys_1.default.user.findOneBy({ email: email });
    if (user) {
        const token = (0, jsonwebtoken_1.sign)({ changePass: true }, String(process.env.SECRET_KEY), {
            expiresIn: "10m",
            subject: String(user.id),
        });
        const send = (0, recoverySendEmail_service_1.sendEmailRecovery)(email, token);
        return res.status(200).send();
    }
    else {
        return res.status(404).send();
    }
});
exports.sendChangePass = sendChangePass;
const changePass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    yield (0, patchProfile_service_1.default)(res.locals.userId, { password: req.body.password });
    return res.status(204).send();
});
exports.changePass = changePass;
