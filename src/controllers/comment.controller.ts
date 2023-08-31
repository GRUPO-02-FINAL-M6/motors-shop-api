import { Request, Response } from "express";
import advertisementSchema from "../schemas/advertisementSchema";
import { advertisementServices } from "../services/advertisement.services";
import { CommentCreateService } from "../services/Comment.services/CreateComment.service";
import { commentGetService } from "../services/Comment.services/GetComments.service";
import { CommentDeleteService } from "../services/Comment.services/DeleteComment.service";
import { CommentPatchService } from "../services/Comment.services/PatchComment.service";
import { log } from "console";

const commentCreate = async (req: Request, res: Response): Promise<Response> => {
  const { description } = req.body;

  const createComment = await CommentCreateService(description, res.locals.userId, Number(req.params.adsId));

  return res.status(201).json(createComment);
};

const commentReadAll = async (req: Request, res: Response): Promise<Response> => {
  const comments = await commentGetService(Number(req.params.adsId));
  return res.status(200).json(comments);
};

const commentUpdate = async (req: Request, res: Response): Promise<Response> => {
  const comment = await CommentPatchService(Number(req.params.id), Number(res.locals.userId), req.body.description);
  console.log(comment);
  
  return res.status(200).json(comment);
};

const commentDelete = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await CommentDeleteService(Number(req.params.id), Number(res.locals.userId));
  return res.status(204).send();
};

const commentController = {
  commentCreate,
  commentReadAll,
  commentDelete,
  commentUpdate
};

export default commentController;
