"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const address = zod_1.z.object({
    id: zod_1.z.number(),
    cep: zod_1.z.string().min(8).max(8),
    state: zod_1.z.string(),
    city: zod_1.z.string(),
    street: zod_1.z.string(),
    number: zod_1.z.number(),
    complement: zod_1.z.string().optional().default(""),
});
const addressRequest = address.omit({ id: true });
const addressUpdateRequest = addressRequest.partial();
const addressSchema = {
    address,
    addressRequest,
    addressUpdateRequest,
};
exports.default = addressSchema;
