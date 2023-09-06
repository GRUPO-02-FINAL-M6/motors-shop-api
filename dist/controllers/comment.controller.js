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
Object.defineProperty(exports, "__esModule", { value: true });
const CreateComment_service_1 = require("../services/Comment.services/CreateComment.service");
const GetComments_service_1 = require("../services/Comment.services/GetComments.service");
const DeleteComment_service_1 = require("../services/Comment.services/DeleteComment.service");
const PatchComment_service_1 = require("../services/Comment.services/PatchComment.service");
const commentCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { description } = req.body;
    const createComment = yield (0, CreateComment_service_1.CommentCreateService)(description, res.locals.userId, Number(req.params.adsId));
    return res.status(201).json(createComment);
});
const commentReadAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comments = yield (0, GetComments_service_1.commentGetService)(Number(req.params.adsId));
    return res.status(200).json(comments);
});
const commentUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = yield (0, PatchComment_service_1.CommentPatchService)(Number(req.params.id), Number(res.locals.userId), req.body.description);
    return res.status(200).json(comment);
});
const commentDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, DeleteComment_service_1.CommentDeleteService)(Number(req.params.id), Number(res.locals.userId));
    return res.status(204).send();
});
const commentController = {
    commentCreate,
    commentReadAll,
    commentDelete,
    commentUpdate
};
exports.default = commentController;
