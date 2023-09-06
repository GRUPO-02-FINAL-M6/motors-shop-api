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
const advertisementSchema_1 = __importDefault(require("../schemas/advertisementSchema"));
const advertisement_services_1 = require("../services/advertisement.services");
const advertisementCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqIsValid = advertisementSchema_1.default.advertisementRequest.parse(req.body);
    const advertisement = yield advertisement_services_1.advertisementServices.advertisementCreateService(reqIsValid, res.locals.userId);
    return res.status(200).json(advertisement);
});
const advertisementReadAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const filterObj = req.query;
    const page = Number((_a = req.query) === null || _a === void 0 ? void 0 : _a.page);
    const ads = yield advertisement_services_1.advertisementServices.advertisementGetAllService(filterObj, page);
    return res.status(200).json(ads);
});
const advertisementRead = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const advertisement = yield advertisement_services_1.advertisementServices.advertisementGetService(Number(req.params.adsId));
    return res.status(200).json(advertisement);
});
const advertisementUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const advertisement = yield advertisement_services_1.advertisementServices.advertisementUpdateService(req.body, Number(req.params.id), Number(res.locals.userId));
    return res.status(200).json(advertisement);
});
const advertisementDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield advertisement_services_1.advertisementServices.advertisementDeleteService(Number(req.params.id));
    return res.status(200).send();
});
const advertisement = {
    advertisementCreate,
    advertisementRead,
    advertisementReadAll,
    advertisementUpdate,
    advertisementDelete,
};
exports.default = advertisement;
