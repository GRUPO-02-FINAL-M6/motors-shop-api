import { Request, Response } from "express";
import userServices from "../services/user";

const userLogin = (req: Request, res: Response): Response => {
  const userId = res.locals.userId;
  const token = userServices.login(userId);

  return res.status(200).json(token);
};

const userCreate = async (req: Request, res: Response): Promise<Response> => {
  const userData = req.body;

  const newUser = await userServices.createUser(userData);

  return res.status(201).json(newUser);
};

const userReadAll = async (req: Request, res: Response): Promise<Response> => {
  const usersData = await userServices.findAllUsers();

  return res.status(200).json(usersData);
};
const userReadById = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ message: "USUARIO LISTADO PELO ID" });
};

const userReadProfile = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json({ message: "PERFIL DO USUARIO" });
};

const userUpdateProfile = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json({ message: "PERFIL ATUALIZADO" });
};

const userDelete = async (req: Request, res: Response): Promise<Response> => {
  return res.status(204).json({ message: "USUARIO DELETADO" });
};

const users = {
  userLogin,
  userCreate,
  userReadAll,
  userReadById,
  userReadProfile,
  userUpdateProfile,
  userDelete,
};

export default users;
