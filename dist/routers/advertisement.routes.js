"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers"));
const verifyToken_middlewars_1 = __importDefault(require("../middlewares/verifyToken.middlewars"));
const verifyIsOwnerAdvertisement_middlewares_1 = __importDefault(require("../middlewares/verifyIsOwnerAdvertisement.middlewares"));
const advertisement = (0, express_1.Router)();
advertisement.get("", controllers_1.default.ads.advertisementReadAll);
advertisement.get("/:adsId", controllers_1.default.ads.advertisementRead);
//Start Comments
advertisement.get("/:adsId/comments", controllers_1.default.commentController.commentReadAll);
advertisement.use(verifyToken_middlewars_1.default);
advertisement.post("/:adsId/comments", controllers_1.default.commentController.commentCreate);
advertisement.patch("/comments/:id", controllers_1.default.commentController.commentUpdate);
advertisement.delete("/comments/:id", controllers_1.default.commentController.commentDelete);
//End Comments
advertisement.post("", controllers_1.default.ads.advertisementCreate);
advertisement.patch("/:id", verifyIsOwnerAdvertisement_middlewares_1.default, controllers_1.default.ads.advertisementUpdate);
advertisement.delete("/:id", verifyIsOwnerAdvertisement_middlewares_1.default, controllers_1.default.ads.advertisementDelete);
exports.default = advertisement;
