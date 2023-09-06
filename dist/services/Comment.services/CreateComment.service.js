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
exports.CommentCreateService = void 0;
const respositorys_1 = __importDefault(require("../../utils/respositorys"));
const errors_1 = require("../../errors");
const Comment_entity_1 = require("../../entities/Comment.entity");
const advertisementSchema_1 = __importDefault(require("../../schemas/advertisementSchema"));
const CommentCreateService = (comment, userId, postId) => __awaiter(void 0, void 0, void 0, function* () {
    const usersRepo = respositorys_1.default.user;
    const adsRepo = respositorys_1.default.advertisement;
    const commentRepo = respositorys_1.default.comment;
    const user = yield usersRepo.findOneBy({ id: userId });
    const ads = yield adsRepo.findOneBy({ id: postId });
    if (!user) {
        throw new errors_1.AppError("user not found", 404);
    }
    if (!ads) {
        throw new errors_1.AppError("Advertisement not found", 404);
    }
    const newComment = new Comment_entity_1.CommentAds();
    newComment.user = user;
    newComment.description = comment;
    newComment.advertisement = ads;
    const createComment = commentRepo.create(newComment);
    const saveComment = yield commentRepo.save(createComment);
    return advertisementSchema_1.default.CommentAds.parse(Object.assign(Object.assign({}, saveComment), { advertismentId: saveComment.advertisement.id }));
});
exports.CommentCreateService = CommentCreateService;
