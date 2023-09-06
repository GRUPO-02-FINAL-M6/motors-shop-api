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
exports.commentGetService = void 0;
const respositorys_1 = __importDefault(require("../../utils/respositorys"));
const errors_1 = require("../../errors");
const advertisementSchema_1 = __importDefault(require("../../schemas/advertisementSchema"));
const commentGetService = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    const adsRepo = respositorys_1.default.advertisement;
    const commentRepo = respositorys_1.default.comment;
    const ads = yield adsRepo.findOneBy({ id: postId });
    if (!ads) {
        throw new errors_1.AppError("Advertisement not found", 404);
    }
    const comments = yield commentRepo.createQueryBuilder("comment").innerJoinAndSelect("comment.user", "user").where("comment.advertisementId = :idAds", { idAds: postId }).getMany();
    return advertisementSchema_1.default.CommentsAds.parse(comments);
});
exports.commentGetService = commentGetService;
