import { Request, Response } from "express";

const userLogin = (req: Request, res: Response): Response => {
  return res.status(200).json();
};

const userCreate = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json();
};

const userReadAll = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json();
};

const userReadProfile = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json();
};

const userReadById = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json();
};

const userUpdateById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json();
};

const userUpdateProfile = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json();
};

const userDelete = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json();
};

const users = {
  userLogin,
  userCreate,
  userReadAll,
  userReadById,
  userReadProfile,
  userUpdateProfile,
  userUpdateById,
  userDelete,
};

export default users;
