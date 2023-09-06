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
const respositorys_1 = __importDefault(require("../utils/respositorys"));
const advertisement_services_1 = require("../services/advertisement.services");
const errors_1 = require("../errors");
const verifyIsOwnerAdvertisement = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield respositorys_1.default.user.findOneBy({
        id: Number(res.locals.userId),
    });
    if (!user) {
        throw new errors_1.AppError("User not found", 404);
    }
    const advertisement = yield advertisement_services_1.advertisementServices.advertisementGetService(Number(req.params.id));
    console.log(user);
    console.log(advertisement.user);
    if (advertisement.user.id == user.id) {
        return next();
    }
    else {
        throw new errors_1.AppError("unauthorized", 401);
    }
});
exports.default = verifyIsOwnerAdvertisement;
