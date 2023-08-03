import { Request, Response } from "express";

const carCreate = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ message: "CARRO CRIADO" });
};

const carReadAll = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ message: "CARROS LISTADOS" });
};

const carRead = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ message: "CARRO LISTADO" });
};

const carUpdate = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ message: "CARRO ATUALIZADO" });
};

const carDelete = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ message: "CARRO DELETADO" });
};

const cars = {
  carCreate,
  carRead,
  carReadAll,
  carUpdate,
  carDelete,
};

export default cars;
