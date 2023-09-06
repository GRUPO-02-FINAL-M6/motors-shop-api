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
const userSchema_1 = __importDefault(require("../../schemas/userSchema"));
const respositorys_1 = __importDefault(require("../../utils/respositorys"));
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = respositorys_1.default.user.create(userData);
    yield respositorys_1.default.user.save(user);
    const createAddress = respositorys_1.default.address.create(Object.assign(Object.assign({}, userData.address), { user: user }));
    yield respositorys_1.default.address.save(createAddress);
    return userSchema_1.default.userResponse.parse(Object.assign(Object.assign({}, createAddress), user));
});
exports.default = createUser;