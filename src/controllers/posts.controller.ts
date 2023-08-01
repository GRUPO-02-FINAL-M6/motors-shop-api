import { Request, Response } from "express";

import postsServices from "../services/posts";

const postCreate = async (req: Request, res: Response): Promise<Response> => {
  const userId = Number(res.locals.userId);
  const postData = req.body;

  const newPost = await postsServices.createPost(postData, userId);

  return res.status(201).json(newPost);
};

const postReadAll = async (req: Request, res: Response): Promise<Response> => {
  const posts = await postsServices.findAllPost();

  return res.json(posts);
};

const postUpdate = async (req: Request, res: Response): Promise<Response> => {
  const postId = Number(req.params.id);
  const postData = req.body;

  const newData = await postsServices.updatePost(postId, postData);

  return res.json(newData);
};

const postReadByToken = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = Number(res.locals.userId);

  const postsUser = await postsServices.findByUserIdPost(userId);

  return res.json(postsUser);
};

const postReadByUserId = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = Number(req.params.userId);

  const postsUser = await postsServices.findByUserIdPost(userId);

  return res.json(postsUser);
};

const postDelete = async (req: Request, res: Response): Promise<Response> => {
  const postId = Number(req.params.id);

  await postsServices.deletePost(postId);

  return res.sendStatus(204);
};

const posts = {
  postCreate,
  postReadAll,
  postReadByToken,
  postReadByUserId,
  postUpdate,
  postDelete,
};

export default posts;
