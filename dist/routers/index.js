"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const advertisement_routes_1 = __importDefault(require("./advertisement.routes"));
const filter_routes_1 = __importDefault(require("./filter.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const recoveryPass_routes_1 = __importDefault(require("./recoveryPass.routes"));
exports.routes = {
    user: user_routes_1.default,
    filter: filter_routes_1.default,
    advertisement: advertisement_routes_1.default,
    recoveryPass: recoveryPass_routes_1.default
};
