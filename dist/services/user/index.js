"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createUser_service_1 = __importDefault(require("./createUser.service"));
const deleteUser_service_1 = __importDefault(require("./deleteUser.service"));
const findAllUsers_service_1 = __importDefault(require("./findAllUsers.service"));
const findUserProfile_service_1 = __importDefault(require("./findUserProfile.service"));
const login_service_1 = __importDefault(require("./login.service"));
const patchProfile_service_1 = __importDefault(require("./patchProfile.service"));
const userServices = {
    createUser: createUser_service_1.default,
    findAllUsers: findAllUsers_service_1.default,
    login: login_service_1.default,
    findUser: findUserProfile_service_1.default,
    deleteUser: deleteUser_service_1.default,
    patchProfile: patchProfile_service_1.default,
};
exports.default = userServices;
