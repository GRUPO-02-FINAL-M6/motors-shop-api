import { Request, Response } from "express";

const likeCreate = async (req: Request, res: Response): Promise<Response> => {
    return res.json("");
};

const likeRead = async (req: Request, res: Response): Promise<Response> => {
    return res.json("");
};

const likeDelete = async (req: Request, res: Response): Promise<Response> => {
    return res.json("");
};

const likes = {
    likeCreate,
    likeRead,
    likeDelete
};

export default likes;