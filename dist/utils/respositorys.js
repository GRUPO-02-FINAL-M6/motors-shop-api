"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const entities_1 = require("../entities");
const user = data_source_1.AppDataSource.getRepository(entities_1.entites.User);
const address = data_source_1.AppDataSource.getRepository(entities_1.entites.Address);
const advertisement = data_source_1.AppDataSource.getRepository(entities_1.entites.Advertisement);
const comment = data_source_1.AppDataSource.getRepository(entities_1.entites.CommentAds);
const repositories = {
    user,
    advertisement,
    address,
    comment
};
exports.default = repositories;
