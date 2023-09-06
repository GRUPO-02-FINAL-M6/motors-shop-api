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
exports.getFilters = void 0;
const respositorys_1 = __importDefault(require("../../utils/respositorys"));
const advertisementRepo = respositorys_1.default.advertisement;
const getFilters = () => __awaiter(void 0, void 0, void 0, function* () {
    const minPrice = yield getMinPrice();
    const maxPrice = yield getMaxPrice();
    const maxKm = yield getMaxKm();
    const distinctBrands = yield getDistinctBrands();
    const distinctColors = yield getDistinctColors();
    const distinctYears = yield getDistinctYears();
    const distinctModels = yield getDistinctModels();
    const fuel = {
        flex: "Gasolina / Etanol",
        hybrid: "Gasolina / Elétrico",
        electric: "Elétrico"
    };
    return { minPrice, maxPrice, distinctBrands, distinctColors, distinctYears, maxKm, distinctModels, fuel };
});
exports.getFilters = getFilters;
function getMaxPrice() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield advertisementRepo
            .createQueryBuilder("ads")
            .select("MAX(ads.Price)", "maxPrice")
            .getRawOne();
        return result.maxPrice;
    });
}
function getMaxKm() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield advertisementRepo
            .createQueryBuilder("ads")
            .select("MAX(ads.km)", "maxKm")
            .getRawOne();
        return result.maxKm;
    });
}
function getMinPrice() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield advertisementRepo
            .createQueryBuilder("ads")
            .select("MIN(ads.Price)", "minPrice")
            .getRawOne();
        return result.minPrice;
    });
}
function getDistinctModels() {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield advertisementRepo
            .createQueryBuilder("ads")
            .select("DISTINCT ads.name", "models")
            .getRawMany();
        const distinctModels = results.map(result => result.models);
        return distinctModels;
    });
}
function getDistinctBrands() {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield advertisementRepo
            .createQueryBuilder("ads")
            .select("DISTINCT ads.brand", "brand")
            .getRawMany();
        const distinctBrands = results.map(result => result.brand);
        return distinctBrands;
    });
}
function getDistinctYears() {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield advertisementRepo
            .createQueryBuilder("ads")
            .select("DISTINCT ads.year", "year")
            .getRawMany();
        const distinctYears = results.map(result => result.year);
        return distinctYears;
    });
}
function getDistinctColors() {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield advertisementRepo
            .createQueryBuilder("ads")
            .select("DISTINCT ads.color", "color")
            .getRawMany();
        const distinctColors = results.map(result => result.color);
        return distinctColors;
    });
}
