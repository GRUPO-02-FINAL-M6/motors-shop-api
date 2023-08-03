import { Request, Response } from "express";

const carCreate = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json();
};

const carReadAll = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json();
};

const carRead = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json();
};

const carUpdate = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json();
};

const carDelete = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json();
};

const cars = {
  carCreate,
  carRead,
  carReadAll,
  carUpdate,
  carDelete,
};

export default cars;
