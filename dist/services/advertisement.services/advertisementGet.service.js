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
exports.advertisementGetService = void 0;
const respositorys_1 = __importDefault(require("../../utils/respositorys"));
const errors_1 = require("../../errors");
const advertisementGetService = (adsId) => __awaiter(void 0, void 0, void 0, function* () {
    const advertisementRepo = respositorys_1.default.advertisement;
    const ads = yield advertisementRepo.createQueryBuilder('ads')
        .innerJoin('ads.user', 'user')
        .addSelect('user.name')
        .addSelect('user.id')
        .where('ads.id = :adsId', { adsId: adsId })
        .getOne();
    if (!ads) {
        throw new errors_1.AppError("Advertisement not found", 404);
    }
    return ads;
});
exports.advertisementGetService = advertisementGetService;
