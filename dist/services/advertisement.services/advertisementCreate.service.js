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
exports.advertisementCreateService = void 0;
const respositorys_1 = __importDefault(require("../../utils/respositorys"));
const errors_1 = require("../../errors");
const advertisementSchema_1 = __importDefault(require("../../schemas/advertisementSchema"));
const advertisementCreateService = (advertisement, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const usersRepo = respositorys_1.default.user;
    const user = yield usersRepo.findOneBy({ id: userId });
    if (!user) {
        throw new errors_1.AppError("user not found", 404);
    }
    const advertisementRepo = respositorys_1.default.advertisement;
    const newAdvertisement = advertisementRepo.create(Object.assign(Object.assign({}, advertisement), { user }));
    yield advertisementRepo.save(newAdvertisement);
    return advertisementSchema_1.default.advertisement.parse(Object.assign({}, newAdvertisement));
});
exports.advertisementCreateService = advertisementCreateService;
