import { Request, Response } from "express";

import { TCommentRequest, TCommentResponse, TCommentUpdate } from "../interfaces/comments.interfaces";

const commentCreate = async (req: Request, res: Response): Promise<Response> => {
    return res.json("");
};

const commentRead = async (req: Request, res: Response): Promise<Response> => {
    return res.json("");
};

const commentUpdate = async (req: Request, res: Response): Promise<Response> => {
    return res.json("");
};

const commentDelete = async (req: Request, res: Response): Promise<Response> => {
    return res.json("");
};

const comments = {
    commentCreate,
    commentRead,
    commentUpdate,
    commentDelete
};

export default comments;