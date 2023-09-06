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
const user_1 = __importDefault(require("../services/user"));
const findUserProfile_service_1 = __importDefault(require("../services/user/findUserProfile.service"));
const userLogin = (req, res) => {
    const userId = res.locals.userId;
    const token = user_1.default.login(userId);
    return res.status(200).json(token);
};
const userCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const newUser = yield user_1.default.createUser(userData);
    return res.status(201).json(newUser);
});
const userReadAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usersData = yield user_1.default.findAllUsers();
    return res.status(200).json(usersData);
});
const userReadById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.id);
    const userData = yield (0, findUserProfile_service_1.default)(userId);
    return res.json(userData);
});
const userReadProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = res.locals.userId;
    const userData = yield (0, findUserProfile_service_1.default)(Number(userId));
    return res.json(userData);
});
const userUpdateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = res.locals.userId;
    const body = req.body;
    delete body["id"];
    delete body["createdAt"];
    delete body["deletedAt"];
    const newBody = yield user_1.default.patchProfile(userId, body);
    return res.status(200).json(newBody);
});
const userDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = res.locals.userId;
    yield user_1.default.deleteUser(userId);
    return res.status(204).send();
});
const users = {
    userLogin,
    userCreate,
    userReadAll,
    userReadById,
    userReadProfile,
    userUpdateProfile,
    userDelete,
};
exports.default = users;
