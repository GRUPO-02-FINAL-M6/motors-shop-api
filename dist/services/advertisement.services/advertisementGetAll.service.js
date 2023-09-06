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
exports.advertisementGetAllService = void 0;
const respositorys_1 = __importDefault(require("../../utils/respositorys"));
const advertisementGetAllService = (filterObj, page) => __awaiter(void 0, void 0, void 0, function* () {
    const advertisementRepo = respositorys_1.default.advertisement;
    let filterString = "";
    const query = advertisementRepo
        .createQueryBuilder("ads")
        .innerJoin("ads.user", "user")
        .addSelect("user.name")
        .addSelect("user.id");
    if (filterObj.modelCar && filterObj.modelCar.trim() != "") {
        query.andWhere("LOWER(ads.name) LIKE :name", {
            name: `%${filterObj.modelCar.toLowerCase()}%`,
        });
        filterString += "&" + filterObj.modelCar;
    }
    if (filterObj.color && filterObj.color.trim() != "") {
        query.andWhere("LOWER(ads.color) LIKE :color", {
            color: `%${filterObj.color.toLowerCase()}%`,
        });
    }
    if (filterObj.year !== undefined && filterObj.year.trim() != "") {
        query.andWhere("ads.year = :year", { year: filterObj.year });
    }
    if (filterObj.kmMin !== undefined && filterObj.kmMin.trim() != "") {
        query.andWhere("ads.km >= :kmMin", { kmMin: filterObj.kmMin });
    }
    if (filterObj.kmMax !== undefined && filterObj.kmMax.trim() != "") {
        query.andWhere("ads.km <= :kmMax", { kmMax: filterObj.kmMax });
    }
    if (filterObj.valueMin !== undefined && filterObj.valueMin.trim() != "") {
        query.andWhere("ads.price >= :valueMin", { valueMin: filterObj.valueMin });
    }
    if (filterObj.valueMax !== undefined && filterObj.valueMax.trim() != "") {
        query.andWhere("ads.price <= :valueMax", { valueMax: filterObj.valueMax });
    }
    if (filterObj.fuel && filterObj.fuel.trim() != "") {
        query.andWhere("LOWER(ads.fuel) LIKE :fuel", {
            fuel: `%${filterObj.fuel.toLowerCase()}%`,
        });
    }
    if (filterObj.brand && filterObj.brand.trim() != "") {
        query.andWhere("LOWER(ads.brand) LIKE :brand", {
            brand: `%${filterObj.brand.toLowerCase()}%`,
        });
    }
    try {
        const adsLength = yield query.getCount();
        const perPage = 12;
        const maxItens = adsLength;
        const pageMax = maxItens / perPage;
        if (!page || page < 1) {
            page = 1;
        }
        if (pageMax < page) {
            page = Math.ceil(pageMax);
        }
        let perPageVerification = (page - 1) * perPage;
        if (perPageVerification < 0) {
            perPageVerification = 0;
        }
        const ads = yield query.take(perPage).skip(perPageVerification).getMany();
        let nextPage = `/advertisement?page=${page + 1}`;
        let previousPage = `/advertisement?page=${page - 1}`;
        if (page * maxItens < page) {
            nextPage = null;
        }
        if (page <= 1) {
            previousPage = null;
        }
        if (pageMax == 1) {
            nextPage = null;
        }
        if (pageMax <= page) {
            nextPage = null;
        }
        const response = {
            page: page,
            maxPages: Math.ceil(pageMax),
            previousPage: previousPage,
            nextPage: nextPage,
            ads: ads,
        };
        return response;
    }
    catch (e) {
        console.log(e);
        const response = {
            page: 0,
            maxPages: 0,
            previousPage: null,
            nextPage: null,
            ads: [],
        };
        return response;
    }
});
exports.advertisementGetAllService = advertisementGetAllService;
