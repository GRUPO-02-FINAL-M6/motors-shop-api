"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entites = void 0;
const Advertisement_entitie_1 = require("./Advertisement.entitie");
const user_entitie_1 = require("./user.entitie");
const Address_entity_1 = require("./Address.entity");
const Comment_entity_1 = require("./Comment.entity");
exports.entites = {
    User: user_entitie_1.User,
    Address: Address_entity_1.Address,
    Advertisement: Advertisement_entitie_1.Advertisement,
    CommentAds: Comment_entity_1.CommentAds
};
