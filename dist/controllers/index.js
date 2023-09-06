"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const advertisement_controller_1 = __importDefault(require("./advertisement.controller"));
const filter_controller_1 = require("./filter.controller");
const users_controller_1 = __importDefault(require("./users.controller"));
const recovery_controller_1 = require("./recovery.controller");
const comment_controller_1 = __importDefault(require("./comment.controller"));
const controllers = {
    users: users_controller_1.default,
    ads: advertisement_controller_1.default,
    getAllFilters: filter_controller_1.getAllFilters,
    sendChangePass: recovery_controller_1.sendChangePass,
    changePass: recovery_controller_1.changePass,
    commentController: comment_controller_1.default
};
exports.default = controllers;
