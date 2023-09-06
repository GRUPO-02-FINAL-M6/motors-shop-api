"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.advertisementServices = void 0;
const advertisementCreate_service_1 = require("./advertisementCreate.service");
const advertisementDelete_service_1 = require("./advertisementDelete.service");
const advertisementGet_service_1 = require("./advertisementGet.service");
const advertisementGetAll_service_1 = require("./advertisementGetAll.service");
const advertisementUpdate_service_1 = require("./advertisementUpdate.service");
exports.advertisementServices = {
    advertisementCreateService: advertisementCreate_service_1.advertisementCreateService,
    advertisementUpdateService: advertisementUpdate_service_1.advertisementUpdateService,
    advertisementDeleteService: advertisementDelete_service_1.advertisementDeleteService,
    advertisementGetAllService: advertisementGetAll_service_1.advertisementGetAllService,
    advertisementGetService: advertisementGet_service_1.advertisementGetService,
};
