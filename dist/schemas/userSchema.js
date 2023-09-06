"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const addressSchema_1 = __importDefault(require("./addressSchema"));
const user = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    contact: zod_1.z.string(),
    description: zod_1.z.string(),
    password: zod_1.z.string(),
    createdAt: zod_1.z.string().or(zod_1.z.date()),
    is_seller: zod_1.z.boolean(),
    deletedAt: zod_1.z.string().nullable().or(zod_1.z.date()),
    ads: zod_1.z.any(),
    address: addressSchema_1.default.address.or(addressSchema_1.default.addressRequest)
});
const userRequest = user.omit({
    id: true,
    createdAt: true,
    deletedAt: true,
}).extend({ address: addressSchema_1.default.addressRequest });
const userResponse = user.omit({
    password: true,
});
const userAllResponse = userResponse.array();
const userUpdate = userRequest.partial();
const login = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string(),
});
const userSchema = {
    user,
    userRequest,
    userResponse,
    userAllResponse,
    userUpdate,
    login,
};
exports.default = userSchema;
