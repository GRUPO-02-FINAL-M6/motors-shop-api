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
const respositorys_1 = __importDefault(require("../../utils/respositorys"));
const errors_1 = require("../../errors");
const verifyEmailExist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const user = yield respositorys_1.default.user.findOneBy({ email: email });
    if (user) {
        throw new errors_1.AppError("email already exists", 409);
    }
    next();
});
const verifyUserExist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = Number(req.params.id);
    if (!id) {
        id = res.locals.userId;
    }
    const user = yield respositorys_1.default.user.findOneBy({ id: id });
    if (!user) {
        throw new errors_1.AppError("user not faund", 400);
    }
    next();
});
const userMiddlewares = {
    verifyEmailExist,
    verifyUserExist,
};
exports.default = userMiddlewares;
