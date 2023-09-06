"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Advertisement = exports.Fuel = void 0;
const typeorm_1 = require("typeorm");
const user_entitie_1 = require("./user.entitie");
const Comment_entity_1 = require("./Comment.entity");
var Fuel;
(function (Fuel) {
    Fuel["flex"] = "Flex";
    Fuel["hybrid"] = "H\u00EDbrido";
    Fuel["electric"] = "El\u00E9trico";
})(Fuel || (exports.Fuel = Fuel = {}));
let Advertisement = exports.Advertisement = class Advertisement {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Advertisement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 120 }),
    __metadata("design:type", String)
], Advertisement.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 120 }),
    __metadata("design:type", String)
], Advertisement.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Advertisement.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "integer" }),
    __metadata("design:type", Number)
], Advertisement.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "integer" }),
    __metadata("design:type", Number)
], Advertisement.prototype, "km", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Advertisement.prototype, "fuel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], Advertisement.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Advertisement.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], Advertisement.prototype, "priceFip", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", default: true }),
    __metadata("design:type", Boolean)
], Advertisement.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", array: true }),
    __metadata("design:type", Array)
], Advertisement.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entitie_1.User, (user) => user.ads),
    __metadata("design:type", user_entitie_1.User)
], Advertisement.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Comment_entity_1.CommentAds, (comment) => comment.advertisement),
    __metadata("design:type", Array)
], Advertisement.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "date" }),
    __metadata("design:type", Date)
], Advertisement.prototype, "createdAt", void 0);
exports.Advertisement = Advertisement = __decorate([
    (0, typeorm_1.Entity)("ads")
], Advertisement);
