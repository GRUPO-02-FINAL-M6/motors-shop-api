"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const userSchema_1 = __importDefault(require("./userSchema"));
const Advertisement_entitie_1 = require("../entities/Advertisement.entitie");
const maxYear = new Date().getFullYear() + 1;
const advertisement = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    brand: zod_1.z.string(),
    description: zod_1.z.string(),
    year: zod_1.z.number().max(maxYear),
    km: zod_1.z.number(),
    color: zod_1.z.string(),
    images: zod_1.z.array(zod_1.z.string()),
    fuel: zod_1.z.enum([Advertisement_entitie_1.Fuel.electric, Advertisement_entitie_1.Fuel.flex, Advertisement_entitie_1.Fuel.hybrid]),
    createdAt: zod_1.z.date().or(zod_1.z.string()),
    user: userSchema_1.default.userResponse.omit({ address: true }),
    price: zod_1.z.number(),
    priceFip: zod_1.z.number(),
    active: zod_1.z.boolean()
});
const advertisementRequest = advertisement.omit({
    id: true,
    createdAt: true,
    user: true,
    active: true
});
const CommentAds = zod_1.z.object({
    id: zod_1.z.number(),
    user: userSchema_1.default.userResponse.omit({ address: true }),
    description: zod_1.z.string(),
    createdAt: zod_1.z.string().or(zod_1.z.date()),
    advertismentId: zod_1.z.number()
});
const CommentPatchAds = zod_1.z.object({
    id: zod_1.z.number(),
    description: zod_1.z.string(),
    createdAt: zod_1.z.string().or(zod_1.z.date()),
});
const CommentsAds = zod_1.z.array(CommentAds.omit({ advertismentId: true }));
const advertisementResponseArray = advertisement.array();
const advertisementUpdate = advertisementRequest.partial();
const advertisementResponsePagination = zod_1.z.object({
    page: zod_1.z.number(),
    maxPages: zod_1.z.number(),
    previousPage: zod_1.z.string().or(zod_1.z.null()).or(zod_1.z.undefined()),
    nextPage: zod_1.z.string().or(zod_1.z.null()).or(zod_1.z.undefined()),
    ads: advertisementResponseArray || [zod_1.z.null],
});
const advertisementSchema = {
    advertisement,
    advertisementRequest,
    advertisementResponseArray,
    advertisementUpdate,
    advertisementResponsePagination,
    CommentAds,
    CommentsAds,
    CommentPatchAds
};
exports.default = advertisementSchema;
