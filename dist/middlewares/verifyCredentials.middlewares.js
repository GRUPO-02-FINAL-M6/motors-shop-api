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
const bcryptjs_1 = require("bcryptjs");
const respositorys_1 = __importDefault(require("../utils/respositorys"));
const verifyCredentials = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const user = yield respositorys_1.default.user.findOneBy({
        email: userData.email,
    });
    if (!user)
        return res.status(401).json({ message: "Invalid credentials" });
    const userInactive = user.deletedAt;
    if (userInactive)
        return res.status(401).json({ message: "Invalid credentials" });
    const userPassword = user.password;
    const userRequestPassword = userData.password;
    const validatePassword = (0, bcryptjs_1.compareSync)(userRequestPassword, userPassword);
    if (!validatePassword)
        return res.status(401).json({ message: "Invalid credentials" });
    res.locals.userId = user.id;
    return next();
});
exports.default = verifyCredentials;
