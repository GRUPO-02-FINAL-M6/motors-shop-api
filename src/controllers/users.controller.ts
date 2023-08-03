import { Request, Response } from "express";

const userLogin = (req: Request, res: Response): Response => {
  return res.status(200).json({ message: "USUARIO LOGADO" });
};

const userCreate = async (req: Request, res: Response): Promise<Response> => {
  return res.status(201).json({ message: "USUARIO CRIADO" });
};

const userReadAll = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ message: "USUARIOS LISTADOS" });
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
